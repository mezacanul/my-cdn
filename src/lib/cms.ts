import files from "./files";

async function getMain(region: string) {
  const content = await files.getFileContent(
    region,
    "main.json"
  );
  if (!content) {
    return null;
  }
  return content;
}

async function getHome(region: string) {
  const homeContent = await files.getFileContent(
    region,
    "home.json"
  );
  const projectsContent = await files.getFileContent(
    region,
    "projects/main.json"
  );
  const content = {
    ...homeContent,
    projects: {
      ...homeContent.projects,
      items: projectsContent,
    },
  };
  console.log("content", content);
  if (!content) {
    return null;
  }
  return content;
}

async function selectProject(region: string, id: string) {
  const projectsMain = await files.getFileContent(
    region,
    "projects/main.json"
  );
  const currentMain = projectsMain.find(
    (project: any) => project.id === id
  );
  const projectsContent = await files.getFileContent(
    region,
    "projects/content.json"
  );
  const currentProject = projectsContent[id];
  const content = {
    ...currentMain,
    ...currentProject,
  };
  if (!content) {
    return null;
  }
  return content;
}

export default {
  getMain,
  getHome,
  selectProject,
};
