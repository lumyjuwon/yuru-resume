function isJsonMap(object: any): boolean {
  return typeof object === "object";
}

type Key = string;
type Value = Array<JsonNode> | string | number;
type Child = Array<JsonNode>;

export class JsonNode {
  key: Key;
  value!: Value;
  child!: Child;

  constructor(key: Key, something: any) {
    this.key = key;

    // [{'key': 'value'}] => value
    if (something instanceof Array) {
      this.value = new Array<JsonNode>();
      something.forEach((element) => {
        if (isJsonMap(element)) {
          Object.keys(element).map((_key) => {
            // @ts-ignore
            this.value.push(new JsonNode("root", element));
          });
        } else {
          // @ts-ignore
          this.value.push(element);
        }
      });
    }
    // 'key': {'key': 'value'} => child
    else if (isJsonMap(something)) {
      this.child = new Array<JsonNode>();
      Object.keys(something).map((jsonKey: Key) => {
        this.child?.push(new JsonNode(jsonKey, something[jsonKey]));
      });
    }
    // 'key': 'value' => value
    else {
      this.value = something;
    }
  }

  getKey(): Key {
    return this.key;
  }

  getValue(): Value {
    return this.value;
  }

  getChild(): Child {
    return this.child;
  }
}
