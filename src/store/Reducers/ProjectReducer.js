const initState = {
  projects: [{ id: "1", title: "test", content: "hellooooooooooooooooooo" }],
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Project Created", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("project creating error", action.err);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
