export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //async
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .add({
        ...project,
        autherFirstName: "lahi",
        authorLastName: "madhu",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
