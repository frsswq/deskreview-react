---
title: "Integration Test in React"
description: "Practical exploration of integration testing in React by learning to simulate user behavior, add mocks, and assert client-side form native validation."
tag: "Blog"
date: 14-01-2024
author: Abdullah Ammar
---

## Introduction

Testing is an integral part of software development, providing developers with confidence when making additions, changes, or refactors to the codebase. As I've embarked on my journey to learn frontend development, I often found myself pondering what to test first—utility functions, query calls, components, form schemas, or pages. Typically, I start by testing utility functions, such as date or number formatting, mappers, and other pure functions. These are easy, cost-effective, and quick to test. Then, I proceed with integration tests for more complex scenarios, like data creation involving multiple components: input forms, form schemas, confirmation dialogs, and toast notifications. While integration testing is more challenging, costly, and time-consuming compared to unit testing, it provides immense confidence when introducing changes to the application.

Over the past few months, I've been learning into integration testing for forms and several pages in my application using Jest and React Testing Library, but for learning purpose, I’ll try to use Vitest here since it's compatible with Jest. I've found this process enjoyable and worthwhile, so I'm documenting it for my own learning purposes.

## Project Overview

For this tutorial, I'll show how to test a form that uses several types of components with client-side validation. I've used Vitest as a test runner, and mainly use native component and Radix UI for building this form, which affects what we need to mock and how to test the component.

## Testing Criteria

When conducting integration tests, I've set some criteria to guide my approach:

- Minimize the use of mocks: Reducing the reliance on mocks ensures that tests closely resemble user behavior.
- Mimic user behavior as closely as possible: The goal is to replicate real-world interactions with the application.
- Avoid testing implementation details: Instead of testing how things are implemented, focus on testing the functionality and behavior.

## Setup

Before diving into integration testing, several configurations must be set up, depending on the components and libraries used in your forms or pages. This might involve:

- Mocking various DOM APIs, when using UI components that utilize Browser APIs that not yet implemented in JSDOM.
- Generating mock data to be used across test cases.
- Developing wrappers for our test renderer.

## Mock

**ResizeObserver**

```sh
ReferenceError: ResizeObserver is not defined
 ❯ node_modules/.pnpm/@radix-ui+react-use-size@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-size/dist/packages/react/use-size/src/useSize.tsx:14:30
```

Many component in Radix UI use `useSize` hook that implement `ResizeObserver` under the hood, thus it will give an error when we run test in JSDOM environment, it’s because JSDOM currently doesn’t implement `ResizeObserver`. Therefore, we must add mock to emulate `ResizeObserver` behavior.

```tsx
// Mock the ResizeObserver
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Stub the global ResizeObserver
vi.stubGlobal("ResizeObserver", ResizeObserverMock);
```

## Why Do We Need Mocks?

In software development, external components such as APIs or databases aren't always reliable. Mock data allows us to isolate the behavior of these dependencies, ensuring that our code is tested independently without being influenced by these external components. By using mock data, we can precisely control the scenarios and conditions that our code interacts with. This enables us to test specific functionalities, error cases, or edge scenarios without needing access to the actual external components.

For example, consider a scenario where we want to test a plant's growth under different watering conditions: three times a day, once a day, and no water at all. Plant growth depends on various factors, including temperature and soil quality. Without controlling these variables, we might get inaccurate results due to their dynamic nature. Factors like cloudy weather affecting temperature or soil contamination can introduce unwanted variability. To evaluate the plant's behavior solely based on water intake, we must simulate or "mock" temperature and soil conditions, ensuring they remain constant and standardized.

## Writing Tests

Here, we test a form to add a new gallery collection. This form use native validation and consists of several components, including text input, file, date, number, select, checkbox, and radio button.

This test case focuses on validating the behavior of the `CollectionForm`. It aims to ensure that the form successfully submits when provided with valid input. The test covers user interactions, form submission, and the expected outcomes, including proper rendering and validation of form elements. Here we use Arrange, Act, Assert to structure the test.

### Arrange

```tsx
const collection = {
  title: "Kapal Karam Dilanda Badai",
  description:
    "Layaknya karya-karya bercorak Romantisisme, Raden Saleh mengungkapkan gejolak jiwanya yang terombang-ambing antara keinginan menghayati dunia imajinasi dan menyatakan dunia nyata. Perpaduan keduanya terwujud dalam ekspresi visual yang dramatis, emosional, sekaligus misterius. Meski demikian, para seniman romantisis sering juga berkarya berdasarkan pada kenyataan aktual. Dalam lukisan Kapal Dilanda Badai, dapat dilihat bagaimana Raden Saleh mengungkapkan perjuangan dramatis dua buah kapal dalam hempasan badai dahsyat di tengah lautan. Suasana mencekam diekspresikan lewat awan tebal yang gelap dan ombak-ombak tinggi yang menghancurkan salah satu kapal. Dari sudut atas, secercah sinar matahari tampak memantul ke gulungan ombak—menambah kesan dramatis.",
  artist: "Raden Saleh",
  creationDate: "1840-01-01",
  classification: { value: "painting", label: "Painting" },
  medium: { value: "oil-on-canvas", label: "Oil on Canvas" },
  photo: new File(["Kapal Karam Dilanda Badai"], "kapalKaramDilandaBadai.png", {
    type: "image/png",
  }),
  size: {
    width: 98,
    height: 74,
  },
  type: "physical",
  isPrivate: false,
  terms: true,
};

describe("CollectionForm", () => {
  it("should successfully submit on valid input", async () => {
    const onSubmitMockFn = vi.fn();
    const user = userEvent.setup();
    render(<CollectionForm onSubmit={onSubmitMockFn} />);
    const formElements = {
      titleInput: screen.getByLabelText(/title/i),
      descriptionInput: screen.getByLabelText(/description/i),
      artistInput: screen.getByLabelText(/artist/i),
      creationDateInput: screen.getByLabelText(/creation date/i),
      classificationInput: screen.getByLabelText(/classification/i),
      mediumInput: screen.getByLabelText(/medium/i),
      sizeWidthInput: screen.getByLabelText(/size \(cm\)/i),
      sizeHeightInput: screen.getByLabelText(/height/i),
      sizeLengthInput: screen.getByLabelText(/length/i),
      physicalTypeInput: screen.getByLabelText(/physical/i),
      digitalTypeInput: screen.getByLabelText(/digital/i),
      photoInput: screen.getByLabelText(/photo/i) as HTMLInputElement,
      isPrivateInput: screen.getByLabelText(/private collection/i),
      termsInput: screen.getByLabelText(/accept terms and conditions/i),
      addCollectionButton: screen.getByRole("button", {
        name: /add collection/i,
      }),
    };
  });
});
```

Here what we do in Arrange phase:

1. Create mock to represent sample data that would typically be entered into the form.
2. Add **`onSubmitMockFn`** function as a mock function to simulate the form submission callback.
3. Render the **`CollectionForm`** component into JSDOM.
4. Get all component need to be tested by calling **`screen.getByLabelText`** and **`screen.getByRole`** to interact with input fields and buttons and make sure it's accessible.
5. Setup **`userEvent`** to simulate user interactions with the form.

### Act

```tsx
await user.type(formElements.titleInput, collection.title);
await user.type(formElements.descriptionInput, collection.description);
await user.type(formElements.artistInput, collection.artist);
await user.type(formElements.creationDateInput, collection.creationDate);
await user.selectOptions(
  formElements.classificationInput,
  collection.classification.label
);
await user.selectOptions(formElements.mediumInput, collection.medium.label);
await user.type(formElements.sizeWidthInput, collection.size.width.toString());
await user.type(
  formElements.sizeHeightInput,
  collection.size.height.toString()
);
await user.click(formElements.physicalTypeInput);
await user.upload(formElements.photoInput, collection.photo);
await user.click(formElements.isPrivateInput);
await user.click(formElements.termsInput);
await user.click(formElements.addCollectionButton);
```

There several input interactions simulation here:

- `type` to simulates user input
- `selectOptions` to simulate selecting option from `select` component
- `click` to simulate click on input radio, checkbox, and submit button
- `upload` to simulate adding a photo file

### Assert

```tsx
expect(formElements.titleInput).toHaveValue(collection.title);
expect(formElements.descriptionInput).toHaveValue(collection.description);
expect(formElements.artistInput).toHaveValue(collection.artist);
expect(formElements.classificationInput).toHaveValue(
  collection.classification.value
);
expect(formElements.mediumInput).toHaveValue(collection.medium.value);
expect(formElements.sizeWidthInput).toHaveValue(collection.size.width);
expect(formElements.sizeHeightInput).toHaveValue(collection.size.height);
expect(formElements.digitalTypeInput).not.toBeChecked();
expect(formElements.physicalTypeInput).toBeChecked();
expect(formElements.photoInput.files?.[0]).toBe(collection.photo);
expect(formElements.photoInput.files).toHaveLength(1);
expect(formElements.isPrivateInput).toBeChecked();
expect(formElements.termsInput).toBeChecked();

expect(formElements.titleInput).toBeValid();
expect(formElements.descriptionInput).toBeValid();
expect(formElements.artistInput).toBeValid();
expect(formElements.creationDateInput).toBeValid();
expect(formElements.classificationInput).toBeValid();
expect(formElements.mediumInput).toBeValid();
expect(formElements.sizeWidthInput).toBeValid();
expect(formElements.sizeHeightInput).toBeValid();
expect(formElements.photoInput).toBeValid();
expect(formElements.isPrivateInput).toBeValid();
expect(formElements.termsInput).toBeValid();

expect(onSubmitMockFn).toBeCalledTimes(1);
```

This assertion to ensure that the rendered form matches the expected state after user interactions. This includes checking the accuracy of form element values, validating the correctness of checkbox and radio button states, confirming the invocation of the form submission callback (onSubmitMockFn), and ensuring that all form elements are in a valid state. Any deviation from the expected outcomes during this phase indicates potential issues in the form's functionality or user interface

Here our complete test case:

```tsx
import App from "./app";
import CollectionForm from "./form";
import { cleanup, render, screen, userEvent, within } from "./utils/test-utils";

const collection = {
  title: "Kapal Karam Dilanda Badai",
  description:
    "Layaknya karya-karya bercorak Romantisisme, Raden Saleh mengungkapkan gejolak jiwanya yang terombang-ambing antara keinginan menghayati dunia imajinasi dan menyatakan dunia nyata. Perpaduan keduanya terwujud dalam ekspresi visual yang dramatis, emosional, sekaligus misterius. Meski demikian, para seniman romantisis sering juga berkarya berdasarkan pada kenyataan aktual. Dalam lukisan Kapal Dilanda Badai, dapat dilihat bagaimana Raden Saleh mengungkapkan perjuangan dramatis dua buah kapal dalam hempasan badai dahsyat di tengah lautan. Suasana mencekam diekspresikan lewat awan tebal yang gelap dan ombak-ombak tinggi yang menghancurkan salah satu kapal. Dari sudut atas, secercah sinar matahari tampak memantul ke gulungan ombak—menambah kesan dramatis.",
  artist: "Raden Saleh",
  creationDate: "1840-01-01",
  classification: { value: "painting", label: "Painting" },
  medium: { value: "oil-on-canvas", label: "Oil on Canvas" },
  photo: new File(["Kapal Karam Dilanda Badai"], "kapalKaramDilandaBadai.png", {
    type: "image/png",
  }),
  size: {
    width: 98,
    height: 74,
  },
  type: "physical",
  isPrivate: false,
  terms: true,
};

describe("CollectionForm", () => {
  it("should successfully submit on valid input", async () => {
    const onSubmitMockFn = vi.fn();
    const user = userEvent.setup();
    render(<CollectionForm onSubmit={onSubmitMockFn} />);
    const formElements = {
      titleInput: screen.getByLabelText(/title/i),
      descriptionInput: screen.getByLabelText(/description/i),
      artistInput: screen.getByLabelText(/artist/i),
      creationDateInput: screen.getByLabelText(/creation date/i),
      classificationInput: screen.getByLabelText(/classification/i),
      mediumInput: screen.getByLabelText(/medium/i),
      sizeWidthInput: screen.getByLabelText(/size \(cm\)/i),
      sizeHeightInput: screen.getByLabelText(/height/i),
      sizeLengthInput: screen.getByLabelText(/length/i),
      physicalTypeInput: screen.getByLabelText(/physical/i),
      digitalTypeInput: screen.getByLabelText(/digital/i),
      photoInput: screen.getByLabelText(/photo/i) as HTMLInputElement,
      isPrivateInput: screen.getByLabelText(/private collection/i),
      termsInput: screen.getByLabelText(/accept terms and conditions/i),
      addCollectionButton: screen.getByRole("button", {
        name: /add collection/i,
      }),
    };

    await user.type(formElements.titleInput, collection.title);
    await user.type(formElements.descriptionInput, collection.description);
    await user.type(formElements.artistInput, collection.artist);
    await user.type(formElements.creationDateInput, collection.creationDate);
    await user.selectOptions(
      formElements.classificationInput,
      collection.classification.label
    );
    await user.selectOptions(formElements.mediumInput, collection.medium.label);
    await user.type(
      formElements.sizeWidthInput,
      collection.size.width.toString()
    );
    await user.type(
      formElements.sizeHeightInput,
      collection.size.height.toString()
    );
    await user.click(formElements.physicalTypeInput);
    await user.upload(formElements.photoInput, collection.photo);
    await user.click(formElements.isPrivateInput);
    await user.click(formElements.termsInput);
    await user.click(formElements.addCollectionButton);

    expect(formElements.titleInput).toHaveValue(collection.title);
    expect(formElements.descriptionInput).toHaveValue(collection.description);
    expect(formElements.artistInput).toHaveValue(collection.artist);
    expect(formElements.classificationInput).toHaveValue(
      collection.classification.value
    );
    expect(formElements.mediumInput).toHaveValue(collection.medium.value);
    expect(formElements.sizeWidthInput).toHaveValue(collection.size.width);
    expect(formElements.sizeHeightInput).toHaveValue(collection.size.height);
    expect(formElements.digitalTypeInput).not.toBeChecked();
    expect(formElements.physicalTypeInput).toBeChecked();
    expect(formElements.photoInput.files?.[0]).toBe(collection.photo);
    expect(formElements.photoInput.files).toHaveLength(1);
    expect(formElements.isPrivateInput).toBeChecked();
    expect(formElements.termsInput).toBeChecked();

    expect(formElements.titleInput).toBeValid();
    expect(formElements.descriptionInput).toBeValid();
    expect(formElements.artistInput).toBeValid();
    expect(formElements.creationDateInput).toBeValid();
    expect(formElements.classificationInput).toBeValid();
    expect(formElements.mediumInput).toBeValid();
    expect(formElements.sizeWidthInput).toBeValid();
    expect(formElements.sizeHeightInput).toBeValid();
    expect(formElements.photoInput).toBeValid();
    expect(formElements.isPrivateInput).toBeValid();
    expect(formElements.termsInput).toBeValid();

    expect(onSubmitMockFn).toBeCalledTimes(1);
  });
});
```

The last step is to run the test by calling `pnpm test` and make sure it's all good.

![test passed](../../assets/blog/integration-test-in-react/test-result.webp)

## Conclusion

Remember that testing is an ongoing process and add more test to cover more cases. As your codebase evolves, make sure to update and expand your tests accordingly. Regularly review and refactor your tests to keep them effective and maintainable.

## References

- https://vitest.dev/
- https://testing-library.com/
- https://kentcdodds.com/blog/write-tests
