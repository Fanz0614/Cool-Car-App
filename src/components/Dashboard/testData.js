import { v1 as uuid } from 'uuid';

export const testData = [
    {
      id: uuid(),
      vehicle: '2020 SKODA Superb',
      purchasePrice: '50000',
      originPrice: '60000',
      type: 'Automatic',
      engine: '4cyl 2.0L Turbo Petrol',
      colour: 'Magic Black',
      body: '5 doors 5 seat Wagon',
      describe: 'My first secondhand car in Melbourne',
      comment:
        'NEW DEMO SUPERB SCOUT 4X4 WAGON INCLUDES SUNROOF AND 19 INCH MANASLU ALLOY WHEELS.',
      checked: false,
    },
    {
      id: uuid(),
      vehicle: '2019 MINI Cooper Works Auto ALL4',
      purchasePrice: '40000',
      originPrice: '66000',
      type: 'Automatic',
      engine: '4cyl 2.0L Turbo Petrol',
      colour: 'Starlight Blue',
      body: '5 doors 5 seat Wagon',
      describe: 'My first secondhand car in Melbourne',
      comment:
        'HIFI LOUDSPEAKER SYSTEM HARMAN KARDON  SPORT AUTOMATIC TRANSMISSION',
      checked: false,
    },
    {
      id: uuid(),
      vehicle: '2016 Hyundai i30 Active X Auto MY17',
      purchasePrice: '18000',
      originPrice: '40000',
      type: 'Automatic',
      engine: '4 cylinder Petrol Aspirated 1.8L',
      colour: 'Marina Blue',
      body: '5 doors 5 seat Hatch',
      describe: 'My first secondhand car in Melbourne',
      comment:
        'Parking will be a breeze with park assist. This car has USB audio input, front cup holders, central locking, 16" alloy wheels, front & rear power windows and cruise control. This car has air conditioning, making those summer drives a breeze and storage compartment in centre console. ',
      checked: false,
    },
  ]