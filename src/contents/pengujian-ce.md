---
title: Pengujian Web Component
description: Tutorial singkat pengujian web component menggunakan AVA dan Happy DOM
tag: Blog
keywords:
  - Testing
  - Custom Elements
  - Web Components
status: In Progress
publishedAt: "2021-12-23"
image: ../../assets/blog/pengujian-ce/pengujian-ce.webp
imageAlt: "Ilustrasi Testing"
author: Abdullah Ammar
---

Beberapa minggu yang lalu, saya coba membuat sebuah user interface menggunakan salah satu Web API
yaitu Custom Elements API. Dengan API ini memungkinkan kita untuk membuat sebuah komponen web yang
mampu berjalan di laman berbasis JavaScript manapun. Apakah proyek web kamu pakai React? Vue?
Svelte? Tentu saja bisa, selama _library_ atau _framework_ tersebut mendukung. Untuk memastikan
bahwa _custom elements_ atau yang biasa dikenal sebagai _web components_ ini berjalan sebagaimana
mestinya—atau setidaknya ketika ada fitur baru ditambahkan kita tidak perlu repot-repot melakukan
pengujian secara manual—, tentu saja kita harus melakukan sebuah 😱**pengujian**😱. Tapi sebelum
itu, mari kita buat sebuah _custom elements_ sederhana terlebih dahulu, yeay!.

## Membuat Komponen

Pertama, buat sebuah file baru di root direktori kalian dengan nama `print-text.js`. Lalu tambahkan
kode berikut:

```js
class PrintText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.template = document.createElement("template");
    this.template.innerHTML = PrintText.template();
    this.shadowRoot.append(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    this.message = this.getAttribute("message") || "Hello World!";
    this.shadowRoot.querySelector("h1").textContent = this.message;
  }

  static template() {
    return `
      <style>
        :host {
          display: block;
          padding: 1rem;
          background: #f0f0f0;
        }
      </style>
      <h1></h1>
    `;
  }
}

customElements.define("print-text", PrintText);
```

Kemudian. _import_ file `print-text.js` tersebut ke dalam file HTML dan gunakan komponen yang telah
dibuat tadi dengan menggunakan tag `<print-text></print-text>` di dalam file HTML.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
    <script type="module" src="print-text.js"></script>
  </head>
  <body>
    <print-text message="Hello World!"></print-text>
  </body>
</html>
```

Setelah selesai membuat komponen `print-text`, mari kita lanjutkan untuk melakukan pengujian.

## Konfigurasi Alat Pengujian

Pertama-tama kita harus menginstal AVA dan Happy DOM.

```bash
npm install --save-dev ava happy-dom
```

Setelah itu, buat sebuah folder `__tests__` di _root_ direktori kamu, buat sebuah file JavaScript
baru, dan _import_ AVA serta Happy DOM yang telah kita install.

```js
import test from "ava";
import { Window } from "happy-dom";
```

Tambahkan konfigurasi berikut

```js
import test from "ava";
import { Window } from "happy-dom";

test.before(() => {
  const window = new Window();
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.HTMLElement = window.HTMLElement;
  globalThis.customElements = window.customElements;
});
```

Import secara dinamis komponen `print-text` yang telah kita buat tadi, setiap sebelum kita melakukan
pengujian.

```js
import test from "ava";
import { Window } from "happy-dom";

test.before(() => {
  const window = new Window();
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.HTMLElement = window.HTMLElement;
  globalThis.customElements = window.customElements;
});

test.beforeEach(() => {
  import("../print-text.js");
});
```

## Pengujian

Setelah semua konfigurasi di atas, kita bisa mulai pengujian. Disini kita ingin menguji bahwa
komponen `print-text` berjalan dengan baik dan mencetak kalimat 'Hello World!' pada DOM.

```js
import test from "ava";
import { Window } from "happy-dom";

test.before(() => {
  const window = new Window();

  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.HTMLElement = window.HTMLElement;
  globalThis.customElements = window.customElements;
});

test.beforeEach(() => {
  import("../print-text.js");
});

test("print-text", (t) => {
  const document = globalThis.document;
  const printText = document.createElement("print-text");
  printText.setAttribute("message", "Hello World!");

  document.body.appendChild(printText);

  const helloWorld = document.querySelector("print-text");

  t.is(helloWorld.tagName, "PRINT-TEXT");
  t.is(helloWorld.getAttribute("message"), "Hello World!");
});
```

Kemudian jalankan pengujian tersebut menggunakan AVA dengan mejalankan perintah `ava` pada terminal

```bash
ava
```

Maka akan terlihat hasil pengujian yang telah kita buat.

![print-text is passed the test](../../assets/blog/pengujian-ce/test-passed.webp)

Selesai 🎉, kita telah memastikan bahwa komponen `print-text` berjalan dengan baik menggunakan AVA
dan Happy DOM.

## Referensi

- [AVA](https://github.com/avajs/ava)
- [Happy DOM](https://github.com/capricorn86/happy-dom/tree/master/packages/happy-dom)
- [Unit testing web components with ava and jsdom](https://dev.to/ficusjs/unit-testing-web-components-with-ava-and-jsdom-2ofp)
