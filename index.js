//Задача 1.

// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }

//   get radius() {
//     return this._radius;
//   }

//   set radius(newRadius) {
//     if (newRadius <= 0) {
//       throw new Error("Радиус должен быть положительным числом.");
//     }
//     this._radius = newRadius;
//   }

//   get diameter() {
//     return this._radius * 2;
//   }

//   calculateArea() {
//     return Math.PI * Math.pow(this._radius, 2);
//   }

//   calculateCircumference() {
//     return 2 * Math.PI * this._radius;
//   }
// }

// const circle = new Circle(5);
// console.log("Радиус окружности:", circle.radius);
// console.log("Диаметр окружности:", circle.diameter);
// console.log("Площадь окружности:", circle.calculateArea());
// console.log("Длина окружности:", circle.calculateCircumference());

// circle.radius = 7;
// console.log("Новый радиус окружности:", circle.radius);
// console.log("Новый диаметр окружности:", circle.diameter);
// console.log("Новая площадь окружности:", circle.calculateArea());
// console.log("Новая длина окружности:", circle.calculateCircumference());

//Задача 3.

// class CssClass {
//   constructor(className) {
//     this.className = className;
//     this.styles = [];
//   }

//   setStyle(style) {
//     this.styles.push(style);
//   }

//   removeStyle(styleToRemove) {
//     this.styles = this.styles.filter((style) => style !== styleToRemove);
//   }

//   getCss() {
//     const stylesString = this.styles.join("; ");
//     return `.${this.className} { ${stylesString} }`;
//   }
// }

// const myClass = new CssClass("myClass");

// myClass.setStyle("color: red");
// myClass.setStyle("font-size: 16px");
// myClass.setStyle("background-color: #f0f0f0");

// myClass.removeStyle("font-size: 16px");

// console.log(myClass.getCss());

//Задача 4

// class CssClass {
//   constructor(className, styles) {
//     this.className = className;
//     this.styles = styles;
//   }

//   toString() {
//     let styleString = "";
//     for (const [property, value] of Object.entries(this.styles)) {
//       styleString += `${property}: ${value}; `;
//     }
//     return `.${this.className} { ${styleString} }`;
//   }
// }

// class HtmlElement {
//   constructor(tagName, attributes = {}, content = "") {
//     this.tagName = tagName;
//     this.attributes = attributes;
//     this.content = content;
//     this.children = [];
//   }

//   addChild(child) {
//     this.children.push(child);
//   }

//   toString() {
//     const attributeString = Object.entries(this.attributes)
//       .map(([key, value]) => `${key}="${value}"`)
//       .join(" ");
//     const childrenString = this.children
//       .map((child) => child.toString())
//       .join("");
//     return `<${this.tagName} ${attributeString}>${this.content}${childrenString}</${this.tagName}>`;
//   }
// }

// class HtmlBlock {
//   constructor() {
//     this.styles = [];
//     this.rootElement = null;
//   }

//   addStyle(cssClass) {
//     this.styles.push(cssClass);
//   }

//   setRootElement(element) {
//     this.rootElement = element;
//   }

//   getCode() {
//     let htmlCode = "";
//     for (const cssClass of this.styles) {
//       htmlCode += `<style>${cssClass.toString()}</style>`;
//     }
//     if (this.rootElement) {
//       htmlCode += this.rootElement.toString();
//     }
//     return htmlCode;
//   }
// }

// const cssClass1 = new CssClass("heading", {
//   "font-size": "24px",
//   "font-weight": "bold",
// });
// const cssClass2 = new CssClass("paragraph", {
//   "font-size": "16px",
//   color: "#333",
// });

// const heading = new HtmlElement("h1", {}, "Hello, world!");
// const paragraph = new HtmlElement("p", {}, "This is a paragraph.");

// const rootElement = new HtmlElement("div");
// rootElement.addChild(heading);
// rootElement.addChild(paragraph);

// const htmlBlock = new HtmlBlock();
// htmlBlock.addStyle(cssClass1);
// htmlBlock.addStyle(cssClass2);
// htmlBlock.setRootElement(rootElement);

// console.log(htmlBlock.getCode());
