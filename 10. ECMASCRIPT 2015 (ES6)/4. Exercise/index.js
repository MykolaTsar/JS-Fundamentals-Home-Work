// Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().

let server = {
  data: 0,
  convertToString: function (callback) {
    callback(this.data.toString());
  }
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (result) => this.result = result;
  }
}
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"