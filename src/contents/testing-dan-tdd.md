---
title: "Testing dan Test-Driven Development"
subtitle: '"Kenapa kode harus dites? memang perlu? memang ngga makan banyak waktu?"'
description:
  "Rangkuman pembelajaran saya mengenai Testing dan Test-Driven Development menggunakan Jest dan
  React Testing Library "
tag: "Blog"
keywords:
  - Testing
  - TDD
  - Learning
  - Jest
  - React Testing Library
status: "In Progress"
publishedAt: "2021-09-12"
updatedAt: "2021-09-12"
image: "../../assets/blog/testing-dan-tdd/testing-dan-tdd.webp"
imageAlt: "Ilustrasi botol kaca lab sebagai logo"
author: Abdullah Ammar
---

Pertanyaan tersebut adalah pertanyaan yang muncul dibenak saya ketika pertama kali mendengar kata
_testing_ atau pengujian. Kita tau bahwa manusia adalah tempatnya salah dan lupa, beberapa dari
kesalahan itu mungkin tidak penting, tetapi ada juga yang memiliki dampak yang tidak kecil, tentunya
banyak sekali faktor yang bisa membuat kita salah maupun lupa, seperti tidak fokus karena
membayangkan "apa jadinya jika koruptor tidak ada di Indonesia?" atau mungkin karena hal kecil dan
sepele lainnya, apalagi sebagai seorang developer/engineer/programmer yang selalu berurusan dengan
kode berbuntut nan rumit yang tak jarang membuat kepala pusing, duh. Sebelum menjawab pertanyaan
diatas itu, mari kita sedikit berkenalan dengan _testing_.

## Apa itu Testing?

Testing atau dalam konteks ini _software testing_ adalah proses untuk memastikan bahwa sebuah produk
perangkat lunak atau aplikasi melakukan apa yang seharusnya dilakukan.
[Menurut Kent C. Dodds](https://kentcdodds.com/blog//static-vs-unit-vs-integration-vs-e2e-tests),
ada 4 jenis tes dalam pengujian perangkat lunak:

- **Static**: untuk menangkap typo (kesalahan ketik) dan _type errors_ saat menulis kode. _tools_ yang bisa digunakan: ESLint
- **Unit Test**: untuk memastikan unit individu terkecil dalam kode seperti function, method, ataupun class bisa
  berjalan semestinya. _tools_ yang bisa digunakan: Mocha + Chai, Enzyme, Jest, dan React Testing Library
- **Integration Test**: untuk memastikan setiap unit berjalan secara harmonis. _tools_ yang bisa digunakan: Jest dan React Testing Library
- **End-to-End Test**: untuk memastikan aplikasi berjalan dengan benar, biasanya dilakukan oleh sebuah robot yang
  bertindak layaknya pengguna. _tools_ yang bisa digunakan: Cypress dan Selenium

## Kenapa Testing?

Dalam sebuah pengembangan perangkat lunak, biasanya ada sebuah _requirement_ yang harus dipenuhi,
dan seringkali _requirement_ tersebut berubah, hari ini pengguna ingin A, besok pengguna ingin A+B,
dan lusa A+B+C+D, tentu kita harus memastikan bahwa ketika ada fitur baru ditambahkan,
fungsionalitas pada fitur sebelumnya masih berjalan seperti sedia kala, karena itulah maka
diperlukannya sebuah pengujian otomatis.

Dari sedikit artikel yang saya baca, ada 2 keuntungan utama kenapa pengujian dilakukan, yaitu:

#### Mengidentifikasi dan mengurangi/mencegah cacat/bugs pada aplikasi

![A guy from history.com with text: "I read my code and it seemed just fine, Developers"](../../assets/blog/testing-dan-tdd/its-fine.webp)
Apa jadinya jika sistem error karena sebuah kesalahan kecil seperti salah ketik?

#### Memastikan bahwa aplikasi berjalan semestinya

![A girl smiling while a house burning in the background with text: pushes code to prod without testing leaves for vacation](../../assets/blog/testing-dan-tdd/pushes-code-to-prod-without-testing-leaves-for-vacation.webp)

Tentu semua hal ada konsekuensinya, dalam _testing_, hal yang harus dikorbankan adalah waktu, karena
kita perlu menulis tes, namun banyak yang beranggapan bahwa waktu dan effort yang diperlukan untuk
menulis tes jauh lebih sedikit ketimbang menghabiskan waktu dan tenaga untuk mengatasi _bugs_ secara
manual karena tidak dilakukannya pengujian.

## Apa itu Test-Driven Development?

Sesuai dengan namanya, Test-Driven Development adalah pengembangan yang berbasiskan tes, artinya
kita harus menuliskan sebuah test—biasanya disebut _test case_ atau _test suite_—terlebih dahulu
kemudian merancang dan menuliskan implementasi kode untuk memenuhi ekspektasi tes tersebut, proses
ini biasanya dikenal dengan nama _red_, _green_, _refactor_ yang membagi fokus menjadi 3 fase:

- **Red**: menuliskan sebuah _test case_ dan berfokus mengenai fitur _apa_ yang ingin dibuat—biasanya dari
  _requirement_ yang ada
- **Green**: menuliskan implementasi kode minimal dan berfokus _bagaimana_ agar implementasi kode tersebut
  memenuhi ekspektasi _test_ yang ada
- **Refactor**: berfokus _bagaimana_ untuk meningkatkan kualitas implementasi kode yang ada, seperti meningkatkan
  performa aplikasi dan meningkatkan keterbacaan kode yang telah dibuat—implementasi _clean code._

## Kenapa Test-Driven Development?

Ada beberapa keuntungan yang didapatkan ketika melakukan praktik TDD ini, diantaranya yaitu:

1. Dapat dengan mudah untuk mengidentifikasi masalah saat perangkat lunak sedang dikembangkan yang
   memungkinkan masalah ini ditangani dengan lebih cepat karena adanya proses red-green-refactor ini
2. Praktik TDD mengharuskan pengembang menulis kode untuk memenuhi kebutuhan test yang ada, dengan
   pendekatan ini, kode yang dibuat menjadi lebih sederhana dan mudah untuk diuji, karena kode yang
   sederhana juga, maka kode yang ada juga lebih mudah dibaca dan di-_mantain_.

## Implementasi Test-Driven Development

Setelah sedikit mempelajari mengenai Testing dan Test-Driven Development, saatnya _hands-on,_ mari
kita mencoba untuk mempraktekan sedikit ilmu yang sudah kita dapat tadi menggunakan React
(create-react-app), Jest, dan React Testing Library.

### Requirement

- npm atau yarn
- Pemahaman fundamental tentang JavaScript dan React

### User Story

```txt
AS A: BLOGGER

I WANT TO: DISPLAY LIST OF POST WITH TITLE, DATE, AND DESCRIPTION

SO THAT: I CAN SEE ALL OF MY POST EASILY
```

### Implementasi

Diasumsikan kita sudah mempunyai sebuah data berformat JSON seperti berikut

```jsx
[
  {
    title: 'Testing dan Test-Driven Development',
    description:
      'Rangkuman singkat pembelajaran mengenai testing dan test-driven development di JavaScript',
    publishedAt: '2021-09-11',
    author: 'Abdullah Ammar',
    tag: 'Testing',
    tags: ['Learning', 'JavaScript', 'React'],
    image: 'https://abdmmar.com../../assets/belajar_testing/meta.webp',
    imageAlt: 'Illustration of red, green, refactor, approaches',
  },
  ...
]
```

Dan dari contoh _user story_ diatas, diasumsikan juga kita akan membuat sebuah komponen `Card` yang
menampilkan `title`, `publishedAt`, dan `description` dari sebuah tulisan yang telah dipublish
yang nantinya akan digunakan di halaman utama.

#### Memasang Jest dan React Testing Library

Sebelum mulai menulis _test,_ terlebih dahulu kita pasang Jest dan React Testing Library yang sudah
tersedia di dalam create-react-app, oleh karena itu jalankan perintah dibawah untuk membuat sebuah
proyek bernama `testing-and-tdd`

```bash
npx create-react-app testing-and-tdd
```

Setelah selesai dijalankan, maka proyek kamu akan terlihat seperti ini:

```jsx
testing-dan-tdd/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
  ...
```

Lalu buat sebuah folder dan tambahkan beberapa file baru seperti dibawah:

```jsx
testing-and-tdd/
  src/
    components/
      Card/
        Card.js
        Card.test.js
        Card.module.css
      index.js
    ...
  ...
```

#### Menulis Unit Test

Mari kita mulai menulis sebuah _test case_ dengan menjalankan kerangka kerja red, green, refactor

##### Red

Pertama kita import terlebih dahulu function `render` dan objeck `screen` dari React Testing Library
dan import komponen Card yang akan kita test.

```jsx
import { render, screen } from "@testing-library/react";
import Card from "./Card";
```

**Penjelasan**

- function `render` digunakan untuk merender komponen `Card` ke dalam dokumen
- objek `screen` digunakan untuk memanggil query, query ini digunakan untuk menemukan elemen di
  halaman seperti query `getByText()` untuk menemukan elemen berdasarkan teks dan query
  `getByLabelText()` untuk menemukan elemen berdasarkan label atau aria-label. Untuk detail query
  apa saja yang tersedia, kalian dapat melihatnya
  [di sini](https://testing-library.com/docs/queries/about/) atau
  [di sini](https://testing-library.com/docs/react-testing-library/cheatsheet)

Setelah itu, kita buat objek `data` yang berisikan detail informasi sebuah post yang akan digunakan
untuk mengetes komponen card ini

```jsx
const data = {
  title: "Testing dan Test-Driven Development",
  description:
    "Rangkuman singkat pembelajaran testing dan test-driven development di JavaScript",
  publishedAt: "2021-09-11",
  author: "Abdullah Ammar",
  tag: "Testing",
  tags: ["Learning", "JavaScript", "React"],
  image: "https://abdmmar.com../../assets/belajar_testing/meta.webp",
  imageAlt: "Illustration of red, green, refactor, approaches",
};
```

Lalu tambahkan kode berikut:

```jsx
describe('Card', () => {
  test('render Card with title, description, and published date', () => {

  }
})

```

Kemudian kita panggil method `render()` untuk mencetak komponen card ke dalam dokumen dan tambahkan
value dari objek `data` yang telah dibuat tadi kedalam atribut yang dibutuhkan oleh komponen card.

```jsx
describe('Card', () => {
  test('render Card with title, description, and published date', () => {
    // Arrange
    render(<Card
      title={data.title}
      description={data.description}
      date={data.publishedAt}/>)
  }
})

```

Lalu kita panggil query `getByText()` untuk menemukan elemen title, description, dan date

```jsx
describe('Card', () => {
  test('render Card with title, description, and published date', () => {
    // Arrange
    render(<Card
      title={data.title}
      description={data.description}
      date={data.publishedAt}/>)

    // Assert
    const title = screen.getByText(data.title)
    const description = screen.getByText(data.description)
    const date = screen.getByText(data.publishedAt)
  }
})

```

Setelah itu kita tes apakah elemen _title_, _description_, dan _date_ ada di dalam dokumen dan
mempunyai value yang sama dengan value yang diberikan tadi.

```jsx
describe('Card', () => {
  test('render Card with title, description, and published date', () => {
    // Arrange
    render(<Card
      title={data.title}
      description={data.description}
      date={data.publishedAt}/>)

    // Assert
    const title = screen.getByText(data.title)
    const description = screen.getByText(data.description)
    const date = screen.getByText(data.publishedAt)

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(title.textContent).toEqual(data.title)
    expect(description.textContent).toEqual(data.description)
    expect(date.textContent).toEqual(data.publishedAt)
  }
})
```

Sampai sejauh ini, maka kode kita akan terlihat seperti ini:

```jsx
import { render, screen } from "@testing-library/react";
import Card from "./Card";

const data = {
  title: "Testing dan Test-Driven Development",
  description:
    "Rangkuman singkat pembelajaran testing dan test-driven development di JavaScript",
  publishedAt: "2021-09-11",
  author: "Abdullah Ammar",
  tag: "Testing",
  tags: ["Learning", "JavaScript", "React"],
  image: "https://abdmmar.com../../assets/belajar_testing/meta.webp",
  imageAlt: "Illustration of red, green, refactor, approaches",
};

describe("Card", () => {
  test("render Card with title, description, and published date", () => {
    // Arrange
    render(
      <Card
        title={data.title}
        description={data.description}
        date={data.publishedAt}
      />
    );

    // Assert
    const title = screen.getByText(data.title);
    const description = screen.getByText(data.description);
    const date = screen.getByText(data.publishedAt);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(title.textContent).toEqual(data.title);
    expect(description.textContent).toEqual(data.description);
    expect(date.textContent).toEqual(data.publishedAt);
  });
});
```

Lalu kita coba jalankan tesnya menggunakan perintah:

```jsx
yarn start //atau npm start
```

![test error component undefined](../../assets/blog/testing-dan-tdd/test-error-component-undefined.webp)

Maka akan muncul pesan kesalahan karena kita belum membuat komponen `Card`, oleh karena itu mari
kita membuat komponen Card menggunakan function component

```jsx
export default function Card(props) {
  return <div>Hi!</div>;
}
```

Setelah itu kita coba jalankan kembali tesnya

![test error element not found](../../assets/blog/testing-dan-tdd/test-error-element-not-found.webp)

Maka akan muncul pesan kesalahan karena kita elemen dengan teks yang diberikan tidak ditemukan, oleh
karena itu mari ke tahap selanjutnya untuk memenuhi ekspektasi tes ini.

##### Green

Tambahkan beberapa tag dan props title, description, dan date

```jsx
export default function Card({ title, description, date }) {
  return (
    <div>
      <small>{date}</small>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}
```

Lalu kita jalankan kembali tesnya dan terlihat bahwa tes telah berhasil atau _pass_

![test is passing](../../assets/blog/testing-dan-tdd/test-pass-card.webp)

##### Refactor

Setelah itu kalian bisa merefactor kode seperti menambahkan styling ataupun merubah tag sesuai
dengan yang dibutuhkan.

## Kesimpulan

Demikian sedikit rangkuman pembelajaran saya mengenai Testing dan Test-Driven Development
menggunakan Jest dan React Testing Library. Kita sudah membahas apa itu testing, kenapa perlu
testing, hingga implementasi sederhana Test-Driven Development.

Jika teman-teman mempunyai kritik dan saran bisa kirimkan issue di
[GitHub](https://github.com/abdmmar/website/issues) maupun ke akun twitter saya di
[@abdmmar](https://www.twitter.com/abdmmar), terima kasih :)

## Referensi

1. [Introduction | Testing Library](https://testing-library.com/docs/)
2. [Getting Started · Jest](https://jestjs.io/docs/getting-started)
3. [What is software testing?](https://www.ibm.com/topics/software-testing)
4. [Red, Green, Refactor | Codecademy](https://www.codecademy.com/articles/tdd-red-green-refactor)
5. [TDD the Series : Part 1 - Apa itu Test Driven Development (TDD)](https://medium.com/koding-kala-weekend/tdd-the-series-part-1-apa-itu-test-driven-development-tdd-ff92c95c945f)
6. [Static vs Unit vs Integration vs E2E Testing for Frontend Apps](https://kentcdodds.com/blog//static-vs-unit-vs-integration-vs-e2e-tests)
7. [Why Test-Driven Development (TDD) | Marsner Technologies](https://marsner.com/blog/why-test-driven-development-tdd/)
8. [Arrange-Act-Assert: A Pattern for Blog Good Tests](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)
9. [How to Write Tests with React Testing Library and TypeScript](https://javascript.plainenglish.io/how-to-write-the-basic-aaa-pattern-tests-with-react-testing-library-and-typescript-6836173d656b)
10. [Kupas Tuntas Binary Search Tree dengan Test-Driven Development](https://www.youtube.com/watch?v=4tZDfvfXBb4)
