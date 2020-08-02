const Json2ObjHOC = WrappedObject => class extends WrappedObject {
  /* returns JSON String representation of the object */
  stringify() {
    return JSON.stringify(this)
  }

  /* returns Object instance of a current class */
   parse(json) {
    const obj = JSON.parse(json)
    return Object.assign(new WrappedObject(), obj)
  }
}
export default Json2ObjHOC
