const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
constructor(brand = '', motor = '', color = '') {
  this._brand = brand;
  this._motor = motor;
  this._color = color;
  }

  cloneCar() {
  const clonedCar = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  return clonedCar
  }
}
