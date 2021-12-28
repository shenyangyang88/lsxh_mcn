import type { App } from "vue";
import {
  ConfigProvider,
  Layout,
  Row,
  Col,
  Space,
  Form,
  Input,
  Button,
} from "ant-design-vue";

export default class AntdVuePlugin {
  static install(app: App<Element>): void {
    app
      .use(ConfigProvider)
      .use(Layout)
      .use(Row)
      .use(Col)
      .use(Space)
      .use(Form)
      .use(Input)
      .use(Button);
  }
}
