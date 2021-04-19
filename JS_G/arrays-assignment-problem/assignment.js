const members = {
  teamName: "Red Rockets",
  people: ["Max", "John"],
  getTeamMembers() {
    return this.people.map((p) => `${this.teamName}: ${p}`);
  },
};

console.log(members.getTeamMembers());
