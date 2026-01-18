const status = ["Todo", "Working", "Done"] as const;
type TaskStatus = (typeof status)[number];

export { status, type TaskStatus };