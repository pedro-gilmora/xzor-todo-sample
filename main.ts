import { type IApplication, Mount, Singleton } from "@source-crafter/xzor-runtime";
import Routes from "./Routes.xzor";
import { TodoService } from "./services/todos";

// Renders Routes into <div id="app"> and creates one TodoService for the whole app.
@Mount(Routes, "app")
@Singleton(TodoService)
export class Application implements IApplication {}
