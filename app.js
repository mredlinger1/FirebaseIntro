let real_madrid = {
  team_name: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Ronaldo", "Benzema", "Hazard"],
  fans: 798000000,
};

let barcelona = {
  team_name: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  top_scorers: ["Messi", "Suarez", "Puyol"],
  fans: 738000000,
};
let manchester_united = {
  team_name: "Manchester United",
  city: "Manchester",
  country: "England",
  top_scorers: ["Cantona", "Rooney", "Ronaldo"],
  fans: 755000000,
};
let manchester_city = {
  team_name: "Manchester City",
  city: "Manchester",
  country: "England",
  top_scorers: ["Sterling", "Aguero", "Haaland"],
  fans: 537000000,
};
let brazil_national = {
  team_name: "Brazil National Team",
  city: "Not Applicable",
  country: "Brazil",
  top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
  fans: 950000000,
};
let Argentina_national = {
  team_name: "Real Madrid",
  city: "Not Applicable",
  country: "Argentina",
  top_scorers: ["Messi", "Batistuta", "Maradona"],
  fans: 888000000,
};
let atletico_madrid = {
  team_name: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Aragonés", "Griezmann", "Torez"],
  fans: 400000000,
};
db.collection("teams").add(real_madrid);
