export interface BusSchedule {
  id: number;
  line: string;
  route: string;
  schedules: {
    time: string;
    location: string;
  }[];
}

export interface TaxiService {
  id: number;
  name: string;
  phone: string;
  description: string;
}

export const busSchedules: BusSchedule[] = [
  {
    id: 1,
    line: "Empresa General Guemes",
    route: "San Genaro a Rosario",
    schedules: [
      { time: "05:35", location: "Terminal San Genaro" },
      { time: "07:15", location: "Terminal San Genaro" },
      { time: "08:55", location: "Terminal San Genaro" },
      { time: "11:20", location: "Terminal San Genaro" },
      { time: "15:11", location: "Terminal San Genaro" },
      { time: "19:20", location: "Terminal San Genaro" },
      { time: "21:50", location: "Terminal San Genaro" },
      { time: "22:21", location: "Terminal San Genaro" },
    ],
  },
  {
    id: 2,
    line: "Empresa General Guemes",
    route: "Rosario a San Genaro",
    schedules: [
      { time: "06:00", location: "Terminal Rosario" },
      { time: "11:10", location: "Terminal Rosario" },
      { time: "13:10", location: "Terminal Rosario" },
      { time: "15:15", location: "Terminal Rosario" },
      { time: "17:50", location: "Terminal Rosario" },
      { time: "18:30", location: "Terminal Rosario" },
      { time: "21:00", location: "Terminal Rosario" },
      
    ],
  },
];

export const taxiServices: TaxiService[] = [
  {
    id: 1,
    name: "MAGRA CARLOS",
    phone: "(3401)416843",
    description: "Servicio las 24hs",
  },
  {
    id: 2,
    name: "KERN JACOBO",
    phone: "(3401)413270",
    description: "Servicio las 24hs",
  },
  {
    id: 3,
    name: "ROJO NATALIA",
    phone: "(3401)535080",
    description: "Servicio las 24hs",
  },
  {
    id: 4,
    name: "MASS RAIMUNDO",
    phone: "(3401)408662",
    description: "Servicio las 24hs",
  },
  {
    id: 5,
    name: "SPINELLI GUSTAVO",
    phone: "(3401)642575",
    description: "Servicio las 24hs",
  },
  {
    id: 6,
    name: "LATTANZI JUAN",
    phone: "(3401)525743",
    description: "Servicio las 24hs",
  },
  {
    id: 7,
    name: "MONTALDI ALBERTO ",
    phone: "(3401)534473",
    description: "Servicio las 24hs",
  },
  {
    id: 8,
    name: "MATHIEU GRACIELA ",
    phone: "(3401)506902",
    description: "Servicio las 24hs",
  },
  {
    id: 9,
    name: "ALBARENQUE LORENA",
    phone: "(3401)408010",
    description: "Servicio las 24hs",
  },
  {
    id: 10,
    name: "PIERELLA HERNÁN",
    phone: "(3401)410971",
    description: "Servicio las 24hs",
  },
  {
    id: 11,
    name: "ROLDAN ISABEL",
    phone: "(3401)596329",
    description: "Servicio las 24hs",
  },
  {
    id: 12,
    name: "MESCHINI EDGARDO",
    phone: "(3401)642962",
    description: "Servicio las 24hs",
  },
  {
    id: 13,
    name: "MASS RAIMUNDO",
    phone: "(3401)408662",
    description: "Servicio las 24hs",
  },
  {
    id: 14,
    name: "CARASSO NORMA",
    phone: "(3401)523387",
    description: "Servicio las 24hs",
  },
  {
    id: 15,
    name: "MONTALDI ALBERTO",
    phone: "(3401)534473",
    description: "Servicio las 24hs",
  },
  {
    id: 16,
    name: "LEDESMA CARLOS",
    phone: "(3401)648511",
    description: "Servicio las 24hs",
  },
  {
    id: 17,
    name: "LUSSO M. ALEJANDRA",
    phone: "(3401)417982",
    description: "Servicio las 24hs",
  },
]; 