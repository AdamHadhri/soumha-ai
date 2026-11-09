const carModels = [
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Land Rover",
    "Model": "Defender",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Land Rover",
    "Model": "Defender",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Captiva",
    "Body Type": "SUV"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "LT",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "206+",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Jimny",
    "Body Type": "SUV"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "406",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3 GT",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus C-MAX",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Scorpion",
    "Body Type": "Pickup"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "307",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Scorpion",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "404",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "Bayon",
    "Body Type": "SUV"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "404",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Panda",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "T-ROC",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe B",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C35",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Cerato",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "Ka",
    "Body Type": "Hatchback"
  },
  {
    "Make": "mini",
    "Model": "One",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris Verso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C3 Picasso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Capture",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Visa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Escort",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "R5",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "404",
    "Body Type": "Sedan"
  },
  {
    "Make": "Isuzu",
    "Model": "Landwind",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "508",
    "Body Type": "Sedan"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "C1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "R21",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C15",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLE",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Express",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "X-Trail",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Iveco",
    "Model": "Daily",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Combo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Toyota",
    "Model": "Hi Ace",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 30",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "Landwind",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "R21",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Transporter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Sprinter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Express",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "250",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Boxer",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Dacia",
    "Model": "Logan",
    "Body Type": "Sedan"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Bipper",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ford",
    "Model": "Transit",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "Landwind",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Transporter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C35",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Kadjar",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "R21",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "RCZ",
    "Body Type": "Coupe"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Bipper",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Express",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Jeep",
    "Model": "Compass",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Bipper",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Korando",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Actyon",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Jumpy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Sport",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe B",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLC",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Renault",
    "Model": "Kangoo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "Trooper",
    "Body Type": "SUV"
  },
  {
    "Make": "Iveco",
    "Model": "Daily",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Transporter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Transporter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Urvan",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C15",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Jumper",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Opel",
    "Model": "Vivaro",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Actyon",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Transporter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sorento",
    "Body Type": "SUV"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "R4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "Jumpy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLK",
    "Body Type": "SUV"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "Jumpy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "190",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Express",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volvo",
    "Model": "XC60",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Ix 35",
    "Body Type": "SUV"
  },
  {
    "Make": "Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Rover",
    "Model": "Range Rover",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Ducato",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Jumpy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Jumpy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLA",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Bipper",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Transporter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Sport",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sorento",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "407",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "508",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Opel",
    "Model": "Movano",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 2",
    "Body Type": "Coupe"
  },
  {
    "Make": "Ford",
    "Model": "Ranger",
    "Body Type": "Pickup"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Seat",
    "Model": "Altea XL",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Transporter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Bipper",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Actyon",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Toyota",
    "Model": "Land Cruiser",
    "Body Type": "SUV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Actyon",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Touareg",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "405",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "190",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Hi Ace",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Xsara",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Iveco",
    "Model": "Daily",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mahindra",
    "Model": "Scorpion",
    "Body Type": "Pickup"
  },
  {
    "Make": "Mahindra",
    "Model": "Scorpion",
    "Body Type": "Pickup"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Opel",
    "Model": "Campo",
    "Body Type": "Pickup"
  },
  {
    "Make": "Renault",
    "Model": "Microbus",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mazda",
    "Model": "BT-50",
    "Body Type": "Pickup"
  },
  {
    "Make": "Mazda",
    "Model": "BT-50",
    "Body Type": "Pickup"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Ford",
    "Model": "Ranger",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Bipper",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Boxer",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Kangoo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Ducato",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Actyon",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Amarok",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Boxer",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "206+",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Crafter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Isuzu",
    "Model": "Trooper",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Kangoo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Urvan",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mahindra",
    "Model": "Scorpion",
    "Body Type": "Pickup"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "Land Cruiser",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "Hi Ace",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Estafette",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Toyota",
    "Model": "Hi Ace",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "404",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "404",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "H-1",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Hyundai",
    "Model": "H-1",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLE",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "BYD",
    "Model": "F1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "R4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Wallyscar",
    "Model": "wolf",
    "Body Type": "SUV"
  },
  {
    "Make": "Honda",
    "Model": "City",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "DS",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Arosa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Bayon",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "A5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 4",
    "Body Type": "Coupe"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "HS",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "508",
    "Body Type": "Sedan"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Bayon",
    "Body Type": "SUV"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "QQ6",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "Lantra",
    "Body Type": "Sedan"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Geely",
    "Model": "GK-GL",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "M",
    "Body Type": "Coupe"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "HS",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Saxo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 4",
    "Body Type": "Coupe"
  },
  {
    "Make": "Geely",
    "Model": "MK-GS",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Family",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Mokka",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Geely",
    "Model": "GK-GL",
    "Body Type": "Sedan"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Smart",
    "Model": "Smart",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "LT",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Twingo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "QQ",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Panda",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLA",
    "Body Type": "SUV"
  },
  {
    "Make": "BYD",
    "Model": "F3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 2",
    "Body Type": "Coupe"
  },
  {
    "Make": "Kia",
    "Model": "Seltos",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "Aygo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Mokka",
    "Body Type": "SUV"
  },
  {
    "Make": "Opel",
    "Model": "Mokka",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Honda",
    "Model": "City",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Spresso",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mazda",
    "Model": "2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "MX3",
    "Body Type": "Coupe"
  },
  {
    "Make": "Fiat",
    "Model": "Panda",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mazda",
    "Model": "E2000",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Sandero",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chery",
    "Model": "QQ",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Seltos",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Honda",
    "Model": "City",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Ka",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Honda",
    "Model": "City",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Octavia",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Altea XL",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "DS3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris Verso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Dacia",
    "Model": "Logan",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Seltos",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "DS3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Aygo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLA",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A5",
    "Body Type": "Coupe"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Fox",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Octavia",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Tipo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Hummer",
    "Model": "H3",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Citroen",
    "Model": "DS5",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Geely",
    "Model": "GK-GL",
    "Body Type": "Sedan"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Aygo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus C-MAX",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "406",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Octavia",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Jeep",
    "Model": "Wrangler",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "E Coup‚",
    "Body Type": "Coupe"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Panda",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Cerato",
    "Body Type": "Sedan"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Captiva",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "205",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3 GT",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "508",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "DS4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus C-MAX",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mazda",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Twingo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Cadillac",
    "Model": "Escalade",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Beetle",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Express",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "R9",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Ix 35",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C15",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A7",
    "Body Type": "Coupe"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Siena",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Octavia",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Uno",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Express",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Audi",
    "Model": "80",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "80",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "106",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "404",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Panda",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Elantra",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ssangyong",
    "Model": "Family",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Skoda",
    "Model": "Roomster",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Skoda",
    "Model": "Octavia",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Siena",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Super 5",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "mini",
    "Model": "Cooper",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "M",
    "Body Type": "Coupe"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "AX",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "206+",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mitsubishi",
    "Model": "Outlander",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "500L",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Vento",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "406",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "205",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "106",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "205",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Corolla",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Jeep",
    "Model": "Wrangler",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3 GT",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "X3",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "X3",
    "Body Type": "SUV"
  },
  {
    "Make": "Mitsubishi",
    "Model": "Outlander",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "300",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLC",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "X3",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLC",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Capture",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Express",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Express",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Patrol GR",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Bipper",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "106",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Ranger",
    "Body Type": "Pickup"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Express",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Seat",
    "Model": "Altea XL",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Ranger",
    "Body Type": "Pickup"
  },
  {
    "Make": "Renault",
    "Model": "Kangoo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Fiorino",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "5008",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Express",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Jumpy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "306",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Logan",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "220",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Isuzu",
    "Model": "Trooper",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Amarok",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "5008",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "DS5",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Seicento",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "19",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Touareg",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "X5",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Vel Satis",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "407",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "407",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "210",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Peugeot",
    "Model": "205",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "307",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Ranger",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "205",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "220",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Scudo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "210",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mitsubishi",
    "Model": "Pajero",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "M",
    "Body Type": "Coupe"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "Starlet",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "306",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "CX",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "QQ",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "Honda",
    "Model": "HR-V",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Skoda",
    "Model": "Octavia",
    "Body Type": "Sedan"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Kadjar",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C35",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Kuga",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "A5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "Avensis",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "C'eed",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "T-ROC",
    "Body Type": "SUV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "X1",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Arosa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C15",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "308 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "mini",
    "Model": "Country Man",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Ka",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chrysler",
    "Model": "Pacifica",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "A5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "X1",
    "Body Type": "SUV"
  },
  {
    "Make": "Opel",
    "Model": "Kadett",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "mini",
    "Model": "Cooper",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "HS",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "X5",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Escort",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Ritmo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "CX",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mazda",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Vitara",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Focus C-MAX",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Cinquecento",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Cinquecento",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Cerato",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "106",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "508",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Modus",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Saxo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mazda",
    "Model": "E2000",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "106",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Grand Vitara",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "206+",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Kadett",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "19",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Saxo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mazda",
    "Model": "CX-9",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Vitara",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "307",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "205",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "5008",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Ranger",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "C'eed",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Geely",
    "Model": "GK-GS",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Grand Vitara",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "806",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "807",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Tepee",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Express",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Citan",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C35",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ford",
    "Model": "Ranger",
    "Body Type": "Pickup"
  },
  {
    "Make": "Jeep",
    "Model": "Cherokee",
    "Body Type": "SUV"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "MB",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "5008",
    "Body Type": "SUV"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "308 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe B",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Ducato",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Opel",
    "Model": "Combo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover",
    "Body Type": "SUV"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Amarok",
    "Body Type": "Pickup"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLC",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Amarok",
    "Body Type": "Pickup"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe ML",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLC",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Transit",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Touran",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Jeep",
    "Model": "Compass",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Doblo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Scenic",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLC",
    "Body Type": "Coupe"
  },
  {
    "Make": "Renault",
    "Model": "Laguna",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Meriva",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3 GT",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Amarok",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Scenic",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Lancia",
    "Model": "Delta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Actyon",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "BT-50",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "407 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Fiat",
    "Model": "Bravo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Laguna",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "X5",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "DS5",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Touran",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Amarok",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Dacia",
    "Model": "Logan",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "307",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Patrol GR",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "210",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mazda",
    "Model": "B 2500",
    "Body Type": "Pickup"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Touareg",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q7",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "BMW",
    "Model": "X6",
    "Body Type": "SUV"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Fluence",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Touareg",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Mazda",
    "Model": "BT-50",
    "Body Type": "Pickup"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Volkswagen",
    "Model": "Jetta",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "190",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Touareg",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Laguna Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Actyon",
    "Body Type": "SUV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Korando",
    "Body Type": "SUV"
  },
  {
    "Make": "Mitsubishi",
    "Model": "Pajero",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mitsubishi",
    "Model": "Pajero",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Nissan",
    "Model": "Patrol GR",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Scenic",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "407",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Ssangyong",
    "Model": "Actyon",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Jeep",
    "Model": "Cherokee",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "407",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Tepee",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "407",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe ML",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Patrol",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Land Cruiser",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "Xsara Picasso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Fluence",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "405",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "300",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "X1",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "X4",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 4",
    "Body Type": "Coupe"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "80",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "Elantra",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon ST",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Land Rover",
    "Model": "Rover Sport",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "GT",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Mokka",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Optima",
    "Body Type": "Sedan"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Honda",
    "Model": "Jazz",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "GT",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Sport",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "GT",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Dacia",
    "Model": "Logan",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "A3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "Venue",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Ceed",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Saxo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Citroen",
    "Model": "C3 Picasso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Toyota",
    "Model": "Aygo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Aygo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Cerato",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Cerato",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Cerato",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Suzuki",
    "Model": "Baleno",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "LT",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 30",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Elantra",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "QQ",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "QQ",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Cerato",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "30",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "5008",
    "Body Type": "SUV"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Capture",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Panda",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "T-ROC",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "T-ROC",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "T-ROC",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "T-ROC",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "T-ROC",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Focus C-MAX",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Panda",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Seltos",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Creta",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "T-ROC",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Tarraco",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Geely",
    "Model": "GK-GL",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "QQ",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Tipo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Rover",
    "Model": "Rover Sport",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Corolla",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Capture",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Octavia",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Kuga",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Kuga",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "e-zs",
    "Body Type": "SUV"
  },
  {
    "Make": "Mahindra",
    "Model": "Scorpion",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Gol",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLC",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Aygo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C35",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Kuga",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "QQ",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Corolla",
    "Body Type": "Sedan"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Camry",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "QQ",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Venue",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 4",
    "Body Type": "Coupe"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Honda",
    "Model": "City",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Creta",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Creta",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Dacia",
    "Model": "Sandero",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Hyundai",
    "Model": "Elantra",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Capture",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Creta",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "107",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Arosa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fusion",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C35",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Uno",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Uno",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Honda",
    "Model": "City",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sorento",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Kuga",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Twingo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Corolla verso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mazda",
    "Model": "CX-9",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "107",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "Focus C-MAX",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Corolla verso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "207 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "308 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Amarok",
    "Body Type": "Pickup"
  },
  {
    "Make": "Seat",
    "Model": "Arosa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C35",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Tipo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Land Rover",
    "Model": "Freelander",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Elantra",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Capture",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Kadjar",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Kadjar",
    "Body Type": "SUV"
  },
  {
    "Make": "mini",
    "Model": "Cooper",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus C-MAX",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Linea",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "407",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Peugeot",
    "Model": "307",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3 GT",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Optima",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206+",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Honda",
    "Model": "Civic",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "205",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Fluence",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fusion",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Cerato",
    "Body Type": "Sedan"
  },
  {
    "Make": "Dacia",
    "Model": "Sandero",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon ST",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Ford",
    "Model": "Focus C-MAX",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Scorpion",
    "Body Type": "Pickup"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Cruze",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "106",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "Focus C-MAX",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe B",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "106",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Kadett",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Sierra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Kadett",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Uno",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "R19",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206+",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "508",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ford",
    "Model": "Mondeo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "205",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Accent",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Picasso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "307",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Uno",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Land Rover",
    "Model": "Defender",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "MB",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLC",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLA",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLA",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Jeep",
    "Model": "M151 Mutt",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Jeep",
    "Model": "Compass",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Rover",
    "Model": "Rover Sport",
    "Body Type": "SUV"
  },
  {
    "Make": "Jeep",
    "Model": "Grand Cherokee",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Transporter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Transporter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Jumpy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "206+",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206+",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mazda",
    "Model": "E2000",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Suzuki",
    "Model": "Jimmy",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "A5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Panda",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Panda",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris Verso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Volvo",
    "Model": "XC60",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "X1",
    "Body Type": "SUV"
  },
  {
    "Make": "Jaguar",
    "Model": "XJ",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "308 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "250",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volvo",
    "Model": "XC60",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Amarok",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Caddy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Tipo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Tipo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Roomster",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Corolla verso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris",
    "Body Type": "Hatchback"
  },
  {
    "Make": "mini",
    "Model": "Cooper",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Cerato",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Cerato",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Capture",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "CX-9",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLK",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "5008",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Ford",
    "Model": "Ranger",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Santa Fe",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Ranger",
    "Body Type": "Pickup"
  },
  {
    "Make": "Ford",
    "Model": "Ranger",
    "Body Type": "Pickup"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "500X",
    "Body Type": "SUV"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Sport",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Jeep",
    "Model": "Compass",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Transporter",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Laguna",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLC",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "Jumpy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ford",
    "Model": "Ranger",
    "Body Type": "Pickup"
  },
  {
    "Make": "BMW",
    "Model": "X3",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 2",
    "Body Type": "Coupe"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "BMW",
    "Model": "X6",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Seat",
    "Model": "Tarraco",
    "Body Type": "SUV"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Sport",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Multipla",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chevrolet",
    "Model": "Captiva",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "508",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Linea",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Jumpy",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Skoda",
    "Model": "Octavia",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe ML",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "X1",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLS",
    "Body Type": "Sedan"
  },
  {
    "Make": "Lancia",
    "Model": "Delta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "508",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mitsubishi",
    "Model": "Pajero",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "210",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "210",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "C'eed",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Touareg",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "407",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Insignia",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Actyon",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Jetta",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Amarok",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Picasso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "Expert",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "BMW",
    "Model": "X6",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volvo",
    "Model": "XC90",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Multivan",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "Ix 35",
    "Body Type": "SUV"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A6",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Volkswagen",
    "Model": "H2",
    "Body Type": "SUV"
  },
  {
    "Make": "Jeep",
    "Model": "Grand Cherokee",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "mini",
    "Model": "Country Man",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Ix 35",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "407",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "BMW",
    "Model": "X1",
    "Body Type": "SUV"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "Partner",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Rexton",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "Nemo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "X3",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Logan",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Toyota",
    "Model": "Lexus",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Dacia",
    "Model": "Sandero",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Scenic",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volvo",
    "Model": "XC60",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "508",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe ML",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe ML",
    "Body Type": "SUV"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe ML",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "Xsara Picasso",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Dokker",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Toyota",
    "Model": "Prado",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "407 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe ML",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Isuzu",
    "Model": "Landwind",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Corolla",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLE",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLE",
    "Body Type": "SUV"
  },
  {
    "Make": "Smart",
    "Model": "Smart",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "C'eed",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206+",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "MG",
    "Model": "5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "Porsche",
    "Model": "Panamera",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "M",
    "Body Type": "Coupe"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "X3",
    "Body Type": "SUV"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "GT",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Suzuki",
    "Model": "Jimny",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "A3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Seat",
    "Model": "Altea",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 30",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "HS",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "HS",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Tipo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "206+",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "GT",
    "Body Type": "Sedan"
  },
  {
    "Make": "MG",
    "Model": "GT",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "QQ",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "5008",
    "Body Type": "SUV"
  },
  {
    "Make": "Geely",
    "Model": "GK-GL",
    "Body Type": "Sedan"
  },
  {
    "Make": "MG",
    "Model": "GT",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "ECOSPORT",
    "Body Type": "SUV"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Suzuki",
    "Model": "Samurai",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Jetta",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Altea",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "5",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Creta",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Jeep",
    "Model": "Compass",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Captiva",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "X1",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "X1",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "HS",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "QQ",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Tarraco",
    "Body Type": "SUV"
  },
  {
    "Make": "Geely",
    "Model": "GK-GL",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Kadjar",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "5",
    "Body Type": "Sedan"
  },
  {
    "Make": "MG",
    "Model": "HS",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe B",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Octavia",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "T-ROC",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "MG",
    "Model": "HS",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Aygo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Scorpion",
    "Body Type": "Pickup"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Wallyscar",
    "Model": "IRIS",
    "Body Type": "SUV"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Opel",
    "Model": "Frontera",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Corolla",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "RCZ",
    "Body Type": "Coupe"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3 GT",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Rapid",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mahindra",
    "Model": "Scorpion",
    "Body Type": "Pickup"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Jeep",
    "Model": "Wrangler",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Fluence",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Jeep",
    "Model": "Compass",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fusion",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3 GT",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3 GT",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3 GT",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Captiva",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "T-ROC",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Creta",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "A2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Fluence",
    "Body Type": "Sedan"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "HS",
    "Body Type": "SUV"
  },
  {
    "Make": "Skoda",
    "Model": "Octavia",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "308 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Kadjar",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLE",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Jeep",
    "Model": "Compass",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Geely",
    "Model": "GK-GL",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Lancia",
    "Model": "Ypsilon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 4",
    "Body Type": "Coupe"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Kadjar",
    "Body Type": "SUV"
  },
  {
    "Make": "Alfa Romeo",
    "Model": "Mito",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ssangyong",
    "Model": "Family",
    "Body Type": "SUV"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Sandero",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "H6",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Corolla",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Panda",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Murano",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Murano",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Juke",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Jaguar",
    "Model": "XJ",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Jetta",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Cruze",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "BMW",
    "Model": "Serie 4",
    "Body Type": "Coupe"
  },
  {
    "Make": "Dongfeng",
    "Model": "s50",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fusion",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "Elantra",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "4008",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "CX-9",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "6",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Jetta",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLC",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "A5",
    "Body Type": "Coupe"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3 GT",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q3",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Seat",
    "Model": "Altea",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "A6",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 4",
    "Body Type": "Coupe"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Alfa Romeo",
    "Model": "Giulietta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fusion",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "CX7",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Laguna",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Geely",
    "Model": "GK-GT",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A6",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover",
    "Body Type": "SUV"
  },
  {
    "Make": "Chevrolet",
    "Model": "Optra",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Tipo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A6",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Chevrolet",
    "Model": "Optra",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Tiguan",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Exeo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "308 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A5",
    "Body Type": "Coupe"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Cruze",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C-Elys‚e",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "mini",
    "Model": "Cooper",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "Bipper",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Peugeot",
    "Model": "Bipper",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "301",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mazda",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "DS5",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "mini",
    "Model": "One",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A5",
    "Body Type": "Coupe"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A8",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "508",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "508",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mazda",
    "Model": "2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chevrolet",
    "Model": "Spark",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Scirocco",
    "Body Type": "Coupe"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A5",
    "Body Type": "Coupe"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Jetta",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Linea",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Avensis",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Ford",
    "Model": "F150",
    "Body Type": "Pickup"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "230",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "SX4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Honda",
    "Model": "City",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C4 Cactus",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Chevrolet",
    "Model": "Aveo",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "6",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "mini",
    "Model": "One",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "80",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "80",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Kadett",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "MG",
    "Model": "GT",
    "Body Type": "Sedan"
  },
  {
    "Make": "Seat",
    "Model": "Leon",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Linea",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Focus",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "Serie 3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A4",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "106",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Symbol",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BYD",
    "Model": "F3",
    "Body Type": "Sedan"
  },
  {
    "Make": "Geely",
    "Model": "GK-GL",
    "Body Type": "Sedan"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLC",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLE",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Porsche",
    "Model": "Cayenne",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe C Coupe",
    "Body Type": "Coupe"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLE",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "BYD",
    "Model": "F1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLA",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Tucson",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe GLA",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "Q5",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe E",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe S",
    "Body Type": "Sedan"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BMW",
    "Model": "X5",
    "Body Type": "SUV"
  },
  {
    "Make": "Dacia",
    "Model": "Duster",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Jeep",
    "Model": "Commander",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Capture",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "mini",
    "Model": "One",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Capture",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "208",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Veloster",
    "Body Type": "Coupe"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Capture",
    "Body Type": "SUV"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Grand Vitara",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Altea",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Land Rover",
    "Model": "Range Rover Evoque",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Korando",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "mini",
    "Model": "Cooper",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Astra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Hilux",
    "Body Type": "Pickup"
  },
  {
    "Make": "Isuzu",
    "Model": "D-MAX",
    "Body Type": "Pickup"
  },
  {
    "Make": "Porsche",
    "Model": "Panamera",
    "Body Type": "Sedan"
  },
  {
    "Make": "Seat",
    "Model": "Altea",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Seat",
    "Model": "Altea",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Ssangyong",
    "Model": "Korando",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "Nissan",
    "Model": "Navara",
    "Body Type": "Pickup"
  },
  {
    "Make": "mini",
    "Model": "Cooper",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "MG",
    "Model": "GT",
    "Body Type": "Sedan"
  },
  {
    "Make": "mini",
    "Model": "Cooper",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Haval",
    "Model": "jolion",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "mini",
    "Model": "Cooper",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "205",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Uno",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "QQ6",
    "Body Type": "Sedan"
  },
  {
    "Make": "Toyota",
    "Model": "Aygo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "C-HR",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "AX",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Hover",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Capture",
    "Body Type": "SUV"
  },
  {
    "Make": "Mitsubishi",
    "Model": "L200",
    "Body Type": "Pickup"
  },
  {
    "Make": "Kia",
    "Model": "Sportage",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "Aygo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Honda",
    "Model": "City",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C35",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Suzuki",
    "Model": "Celerio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Modus",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Seat",
    "Model": "Ibiza",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "ZS",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "DS3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Chery",
    "Model": "QQ",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mahindra",
    "Model": "Scorpion",
    "Body Type": "Pickup"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "mini",
    "Model": "One",
    "Body Type": "Hatchback"
  },
  {
    "Make": "mini",
    "Model": "One",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "106",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Skoda",
    "Model": "Fabia",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "RAV 4",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Ka",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Swift",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Ka",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "500X",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Explorer",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C2",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Panda",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Elantra",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Chery",
    "Model": "Tiggo",
    "Body Type": "SUV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C15",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Fiat",
    "Model": "500",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Vitara",
    "Body Type": "SUV"
  },
  {
    "Make": "Mazda",
    "Model": "CX-5",
    "Body Type": "SUV"
  },
  {
    "Make": "Kia",
    "Model": "Picanto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "206",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe A",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "AX",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Yaris",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Accent",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Accent",
    "Body Type": "Sedan"
  },
  {
    "Make": "Hyundai",
    "Model": "I 20",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Kia",
    "Model": "Rio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Qashqai",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Ka",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "2008",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "Grand i10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "MG",
    "Model": "3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "190",
    "Body Type": "Sedan"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "DS3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Alfa Romeo",
    "Model": "Mito",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Alfa Romeo",
    "Model": "Mito",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Peugeot",
    "Model": "106",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ssangyong",
    "Model": "Tivoli",
    "Body Type": "SUV"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Polo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Golf",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Mazda",
    "Model": "MX3",
    "Body Type": "Coupe"
  },
  {
    "Make": "Renault",
    "Model": "R5",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat CC",
    "Body Type": "Sedan"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Saxo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Alfa Romeo",
    "Model": "Mito",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Nissan",
    "Model": "Almera",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "Saxo",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "106",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Fiat",
    "Model": "500X",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "Bipper",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "BMW",
    "Model": "Serie 5",
    "Body Type": "Sedan"
  },
  {
    "Make": "Renault",
    "Model": "Megane Estate",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Land Rover",
    "Model": "Freelander",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "505",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "407 SW",
    "Body Type": "Station Wagon"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Vito",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Renault",
    "Model": "Laguna",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "5008",
    "Body Type": "SUV"
  },
  {
    "Make": "Toyota",
    "Model": "Land Cruiser",
    "Body Type": "SUV"
  },
  {
    "Make": "Nissan",
    "Model": "Terrano",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "406",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "Berlingo",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Volkswagen",
    "Model": "Passat",
    "Body Type": "Sedan"
  },
  {
    "Make": "Peugeot",
    "Model": "207",
    "Body Type": "Hatchback"
  },
  {
    "Make": "BYD",
    "Model": "F1",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Jimmy",
    "Body Type": "SUV"
  },
  {
    "Make": "Citroen",
    "Model": "C4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Suzuki",
    "Model": "Jimmy",
    "Body Type": "SUV"
  },
  {
    "Make": "Audi",
    "Model": "A3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Hyundai",
    "Model": "I 10",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Palio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C3",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Alfa Romeo",
    "Model": "8c",
    "Body Type": "Coupe"
  },
  {
    "Make": "Renault",
    "Model": "R4",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "3008",
    "Body Type": "SUV"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Grande Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Toyota",
    "Model": "Starlet",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Siena",
    "Body Type": "Sedan"
  },
  {
    "Make": "Citroen",
    "Model": "XM",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Opel",
    "Model": "Corsa",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Fiat",
    "Model": "Punto",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Citroen",
    "Model": "C35",
    "Body Type": "Van / MPV"
  },
  {
    "Make": "Suzuki",
    "Model": "Vitara",
    "Body Type": "SUV"
  },
  {
    "Make": "Peugeot",
    "Model": "206+",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "R5",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Peugeot",
    "Model": "308",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Renault",
    "Model": "Clio",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Wallyscar",
    "Model": "IRIS",
    "Body Type": "SUV"
  },
  {
    "Make": "Mercedes-Benz",
    "Model": "Classe CLA",
    "Body Type": "Sedan"
  },
  {
    "Make": "Nissan",
    "Model": "Micra",
    "Body Type": "Hatchback"
  },
  {
    "Make": "Ford",
    "Model": "Fiesta",
    "Body Type": "Hatchback"
  }
]

export default carModels