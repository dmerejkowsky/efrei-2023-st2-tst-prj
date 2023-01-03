export const FIELDS = {
    name: "#id_name",
  };

  export const fillCreateTeamForm = (page, model) => {
    const keys = Object.keys(FIELDS);
    keys.forEach((key) => {
      page.type(FIELDS[key], model[key]);
    });
  };
