import { type TaskStatus } from "../types/TaskStatusType.js";
export declare class TaskList {
    templateEl: HTMLTemplateElement;
    element: HTMLDivElement;
    private taskStatus;
    constructor(templateId: string, _taskStatus: TaskStatus);
    setup(): void;
    mount(selector: string): void;
}
//# sourceMappingURL=TaskList.d.ts.map