import { svg } from "d3";


export interface Employee {
    company: string;
    frequency: number;
}

export const StatsBarChart: Employee[] = [
    { company: 'Apple', frequency: 100000 },
    { company: 'IBM', frequency: 80000 },
    { company: 'HP', frequency: 20000 },
    { company: 'Facebook', frequency: 70000 },
    { company: 'TCS', frequency: 12000 },
    { company: 'Google', frequency: 110000 },
    { company: 'Wipro', frequency: 5000 },
    { company: 'EMC', frequency: 4000 }
];

export interface StockData {
    date: number;
    price: number;
}

export const ConstStockData: StockData[] = [
    { date: 1, price: 100 },
    { date: 2, price: 200 },
    { date: 3, price: 300 },
    { date: 5, price: 200 },
    { date: 7, price: 500 }
]

export const LatLonPoints = {
    "type": "FeatureCollection",
    "features": [
        { 
            "type": "Feature", 
            "id": 0, 
            "properties": { 
                "name":"Glenny1" 
            }, 
            "geometry": { 
                "type": "Point", 
                "coordinates": [-112.073795102267638, 33.448183151118144] 
            } 
        },
        { 
            "type": "Feature", 
            "id": 1, 
            "properties": { 
                "name":"Glenny2" 
            }, 
            "geometry": { 
                "type": "Point", 
                "coordinates": [-12.073795102267638, -33.448183151118144] 
            } 
        },
        { 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
                "name":"Glenny3" 
            }, 
            "geometry": { 
                "type": "Point", 
                "coordinates": [12.073795102267638, -33.448183151118144] 
            } 
        },
        { 
            "type": "Feature", 
            "id": 3, 
            "properties": { 
                "name":"Glenny4" 
            }, 
            "geometry": { 
                "type": "Point", 
                "coordinates": [40, 33] 
            } 
        }
        ]
    }

export const E21Points = {
    "features": [
        {
            "geometry": {
                "coordinates": [
                    -19.53603,
                    29.346456
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:00:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -19.253154,
                    27.697493
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:05:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -19.016149,
                    26.031976
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:10:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.820979,
                    24.351492
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:15:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.663839,
                    22.657508
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:20:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.541143,
                    20.951381
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:25:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.449506,
                    19.234371
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:30:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.385724,
                    17.507653
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:35:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.346757,
                    15.772327
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:40:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.329711,
                    14.029426
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:45:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.331825,
                    12.279928
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:50:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.350449,
                    10.524762
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-00:55:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.383034,
                    8.764814
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:00:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.427112,
                    7.000937
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:05:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.480283,
                    5.233956
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:10:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.540202,
                    3.464672
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:15:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.604565,
                    1.693872
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:20:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.671091,
                    -0.07767
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:25:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.737516,
                    -1.849183
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:30:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.801571,
                    -3.619897
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:35:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.860976,
                    -5.389035
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:40:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.913423,
                    -7.155811
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:45:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.956562,
                    -8.91942
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:50:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.987987,
                    -10.679035
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-01:55:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -19.005226,
                    -12.433802
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:00:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -19.005717,
                    -14.18283
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:05:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.986804,
                    -15.925185
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:10:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.945712,
                    -17.659886
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:15:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.879536,
                    -19.385893
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:20:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.78522,
                    -21.102099
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:25:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.659545,
                    -22.807321
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:30:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.499107,
                    -24.500292
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:35:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.3003,
                    -26.179644
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:40:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.0593,
                    -27.8439
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:45:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -17.772046,
                    -29.491459
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:50:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -17.434228,
                    -31.12058
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-02:55:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -17.04127,
                    -32.729366
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:00:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -16.588324,
                    -34.315746
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:05:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -16.070265,
                    -35.877456
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:10:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -15.481693,
                    -37.412018
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:15:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -14.81695,
                    -38.916721
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:20:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -14.070147,
                    -40.388593
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:25:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -13.235206,
                    -41.824385
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:30:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -12.305935,
                    -43.220548
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:35:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -11.276122,
                    -44.573212
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:40:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -10.139668,
                    -45.878173
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:45:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.890759,
                    -47.130883
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:50:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.524094,
                    -48.326451
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-03:55:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -6.035148,
                    -49.459653
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:00:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -4.4205,
                    -50.524963
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:05:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -2.678204,
                    -51.516599
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:10:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -0.808185,
                    -52.428595
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:15:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    1.187342,
                    -53.254903
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:20:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    3.303484,
                    -53.989517
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:25:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    5.532347,
                    -54.62663
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:30:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    7.862832,
                    -55.160812
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:35:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    10.280604,
                    -55.587202
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:40:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    12.768272,
                    -55.901703
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:45:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    15.305808,
                    -56.101158
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:50:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    17.8712,
                    -56.183505
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-04:55:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    20.441286,
                    -56.147875
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:00:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    22.992708,
                    -55.994639
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:05:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    25.502883,
                    -55.725386
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:10:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    27.950901,
                    -55.342846
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:15:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    30.318252,
                    -54.850756
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:20:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    32.589343,
                    -54.253691
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:25:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    34.751773,
                    -53.556874
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:30:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    36.796382,
                    -52.765981
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:35:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    38.717109,
                    -51.886953
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:40:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    40.510712,
                    -50.925839
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:45:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    42.176398,
                    -49.888649
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:50:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    43.715416,
                    -48.781246
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-05:55:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    45.130642,
                    -47.609266
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:00:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    46.426202,
                    -46.378057
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:05:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    47.607123,
                    -45.092644
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:10:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    48.679042,
                    -43.757715
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:15:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    49.647968,
                    -42.37761
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:20:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    50.520086,
                    -40.956332
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:25:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    51.301611,
                    -39.497555
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:30:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    51.998677,
                    -38.00465
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:35:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    52.617255,
                    -36.480694
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:40:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    53.163101,
                    -34.928504
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:45:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    53.64172,
                    -33.350648
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:50:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    54.05835,
                    -31.749475
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-06:55:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    54.417951,
                    -30.127133
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:00:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    54.725206,
                    -28.485588
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:05:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    54.984533,
                    -26.826641
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:10:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.20009,
                    -25.151951
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:15:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.375796,
                    -23.463045
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:20:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.515344,
                    -21.761334
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:25:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.622216,
                    -20.048127
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:30:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.699705,
                    -18.324641
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:35:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.750933,
                    -16.592014
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:40:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.778864,
                    -14.851315
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:45:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.786324,
                    -13.103549
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:50:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.776018,
                    -11.349672
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-07:55:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.750544,
                    -9.590592
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:00:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.712413,
                    -7.827181
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:05:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.664055,
                    -6.06028
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:10:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.607846,
                    -4.290703
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:15:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.54611,
                    -2.519246
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:20:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.481142,
                    -0.746694
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:25:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.415214,
                    1.026179
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:30:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.350597,
                    2.7986
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:35:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.289565,
                    4.569793
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:40:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.234417,
                    6.338974
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:45:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.187485,
                    8.105342
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:50:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.151149,
                    9.868081
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-08:55:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.127855,
                    11.626345
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:00:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.120123,
                    13.379257
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:05:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.130567,
                    15.125902
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:10:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.16191,
                    16.865318
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:15:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.216998,
                    18.59649
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:20:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.298818,
                    20.31834
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:25:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.410516,
                    22.029719
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:30:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.555412,
                    23.729395
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:35:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.737021,
                    25.416046
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:40:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.959069,
                    27.088244
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:45:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    56.225508,
                    28.744443
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:50:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    56.540537,
                    30.382964
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-09:55:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    56.908611,
                    32.001981
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:00:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    57.334457,
                    33.599502
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:05:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    57.823075,
                    35.173351
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:10:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    58.379743,
                    36.721148
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:15:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    59.010006,
                    38.240286
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:20:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    59.719654,
                    39.727912
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:25:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    60.514685,
                    41.180906
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:30:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    61.401249,
                    42.595853
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:35:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    62.385561,
                    43.96903
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:40:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    63.473788,
                    45.296384
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:45:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    64.671892,
                    46.573523
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:50:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.985431,
                    47.79571
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-10:55:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    67.419309,
                    48.95787
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:00:00",
                "number_stations_in_view": 4,
                "stations_in_view": "RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    68.977479,
                    50.054609
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:05:00",
                "number_stations_in_view": 4,
                "stations_in_view": "RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    70.662591,
                    51.080255
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:10:00",
                "number_stations_in_view": 4,
                "stations_in_view": "RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    72.475603,
                    52.028919
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:15:00",
                "number_stations_in_view": 4,
                "stations_in_view": "RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    74.41537,
                    52.894579
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:20:00",
                "number_stations_in_view": 4,
                "stations_in_view": "RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    76.478236,
                    53.671197
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:25:00",
                "number_stations_in_view": 4,
                "stations_in_view": "RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    78.65768,
                    54.352865
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:30:00",
                "number_stations_in_view": 4,
                "stations_in_view": "RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    80.944051,
                    54.933965
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:35:00",
                "number_stations_in_view": 4,
                "stations_in_view": "RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    83.324451,
                    55.409366
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:40:00",
                "number_stations_in_view": 5,
                "stations_in_view": "RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    85.78282,
                    55.774611
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:45:00",
                "number_stations_in_view": 6,
                "stations_in_view": "RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    88.300247,
                    56.02611
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:50:00",
                "number_stations_in_view": 6,
                "stations_in_view": "RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    90.85552,
                    56.161304
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-11:55:00",
                "number_stations_in_view": 6,
                "stations_in_view": "RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    93.425886,
                    56.178786
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:00:00",
                "number_stations_in_view": 5,
                "stations_in_view": "RABT UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    95.987964,
                    56.078377
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:05:00",
                "number_stations_in_view": 5,
                "stations_in_view": "RABT UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    98.518719,
                    55.861134
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:10:00",
                "number_stations_in_view": 5,
                "stations_in_view": "RABT UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    100.996402,
                    55.529293
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:15:00",
                "number_stations_in_view": 5,
                "stations_in_view": "RABT UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    103.40136,
                    55.086164
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:20:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    105.716658,
                    54.535972
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:25:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    107.928455,
                    53.883675
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:30:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    110.026154,
                    53.13477
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:35:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    112.002339,
                    52.295103
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:40:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    113.852551,
                    51.370692
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:45:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    115.574952,
                    50.367578
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:50:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    117.169927,
                    49.291702
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-12:55:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    118.639673,
                    48.148807
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:00:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    119.987799,
                    46.944373
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:05:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    121.218965,
                    45.683574
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:10:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    122.338565,
                    44.371245
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:15:00",
                "number_stations_in_view": 2,
                "stations_in_view": "UCLU METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    123.352465,
                    43.01188
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:20:00",
                "number_stations_in_view": 2,
                "stations_in_view": "UCLU METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    124.26679,
                    41.60963
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:25:00",
                "number_stations_in_view": 2,
                "stations_in_view": "UCLU METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    125.087754,
                    40.168312
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:30:00",
                "number_stations_in_view": 2,
                "stations_in_view": "UCLU METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    125.821534,
                    38.691428
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:35:00",
                "number_stations_in_view": 2,
                "stations_in_view": "UCLU METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    126.474182,
                    37.182182
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:40:00",
                "number_stations_in_view": 1,
                "stations_in_view": "METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    127.05155,
                    35.643503
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:45:00",
                "number_stations_in_view": 1,
                "stations_in_view": "METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    127.559259,
                    34.078064
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:50:00",
                "number_stations_in_view": 1,
                "stations_in_view": "METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    128.002664,
                    32.488308
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-13:55:00",
                "number_stations_in_view": 1,
                "stations_in_view": "METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    128.386847,
                    30.876468
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:00:00",
                "number_stations_in_view": 1,
                "stations_in_view": "METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    128.716613,
                    29.244586
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:05:00",
                "number_stations_in_view": 1,
                "stations_in_view": "METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    128.996495,
                    27.594534
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:10:00",
                "number_stations_in_view": 0,
                "stations_in_view": ""
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.230764,
                    25.92803
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:15:00",
                "number_stations_in_view": 0,
                "stations_in_view": ""
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.423443,
                    24.246654
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:20:00",
                "number_stations_in_view": 0,
                "stations_in_view": ""
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.57832,
                    22.551866
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:25:00",
                "number_stations_in_view": 0,
                "stations_in_view": ""
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.698968,
                    20.845017
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:30:00",
                "number_stations_in_view": 0,
                "stations_in_view": ""
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.788763,
                    19.12736
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:35:00",
                "number_stations_in_view": 0,
                "stations_in_view": ""
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.850896,
                    17.400066
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:40:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.888399,
                    15.664229
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:45:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.904156,
                    13.920881
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:50:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.900921,
                    12.170995
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-14:55:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.881337,
                    10.415497
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:00:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.847949,
                    8.655272
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:05:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.803218,
                    6.89117
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:10:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.749541,
                    5.124014
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:15:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.689261,
                    3.354604
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:20:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.62468,
                    1.583727
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:25:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.558076,
                    -0.187844
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:30:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.491715,
                    -1.959338
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:35:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.427864,
                    -3.729985
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:40:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.368806,
                    -5.499008
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:45:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.316851,
                    -7.265619
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:50:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.274351,
                    -9.029012
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-15:55:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.243717,
                    -10.788361
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:00:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.227426,
                    -12.542806
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:05:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.228044,
                    -14.291455
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:10:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.248236,
                    -16.033373
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:15:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.290783,
                    -17.767574
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:20:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.3586,
                    -19.493013
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:25:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.454752,
                    -21.208581
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:30:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.582468,
                    -22.91309
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:35:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.745166,
                    -24.605264
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:40:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.946464,
                    -26.283733
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:45:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    130.190201,
                    -27.94701
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:50:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    130.480451,
                    -29.593486
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-16:55:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    130.821543,
                    -31.221411
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:00:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    131.218068,
                    -32.828878
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:05:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    131.674892,
                    -34.413805
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:10:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    132.197158,
                    -35.973914
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:15:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    132.790281,
                    -37.506715
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:20:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    133.459935,
                    -39.00948
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:25:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    134.212024,
                    -40.47922
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:30:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    135.052634,
                    -41.91267
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:35:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    135.987961,
                    -43.30626
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:40:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    137.024217,
                    -44.6561
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:45:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    138.167489,
                    -45.957965
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:50:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    139.423563,
                    -47.207286
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-17:55:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    140.797704,
                    -48.399149
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:00:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    142.294378,
                    -49.528311
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:05:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    143.916924,
                    -50.589229
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:10:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    145.667187,
                    -51.576106
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:15:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    147.545111,
                    -52.482969
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:20:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    149.548325,
                    -53.303767
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:25:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    151.671759,
                    -54.032501
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:30:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    153.907325,
                    -54.663384
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:35:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    156.24372,
                    -55.191014
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:40:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    158.666412,
                    -55.610572
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:45:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    161.157829,
                    -55.918013
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:50:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    163.697801,
                    -56.110246
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-18:55:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    166.264215,
                    -56.185279
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:00:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    168.833868,
                    -56.142319
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:05:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    171.38342,
                    -55.981815
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:10:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    173.890368,
                    -55.70543
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:15:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    176.33393,
                    -55.315961
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:20:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    178.695763,
                    -54.817202
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:25:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -179.039533,
                    -54.213773
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:30:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -176.884158,
                    -53.510933
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:35:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -174.847074,
                    -52.714378
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:40:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -172.934156,
                    -51.830063
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:45:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -171.148483,
                    -50.864037
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:50:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -169.490708,
                    -49.822303
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-19:55:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -167.959471,
                    -48.710714
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:00:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -166.551805,
                    -47.534888
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:05:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -165.263519,
                    -46.300156
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:10:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -164.089541,
                    -45.011521
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:15:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -163.024201,
                    -43.67365
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:20:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -162.061477,
                    -42.290861
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:25:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -161.195175,
                    -40.867137
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:30:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -160.419083,
                    -39.406133
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:35:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -159.727076,
                    -37.911199
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:40:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -159.113193,
                    -36.385399
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:45:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -158.571694,
                    -34.83153
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:50:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -158.097088,
                    -33.252148
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-20:55:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -157.684157,
                    -31.649589
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:00:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -157.327956,
                    -30.025988
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:05:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -157.023819,
                    -28.3833
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:10:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.767346,
                    -26.723318
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:15:00",
                "number_stations_in_view": 1,
                "stations_in_view": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.554391,
                    -25.047692
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:20:00",
                "number_stations_in_view": 2,
                "stations_in_view": "MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.381052,
                    -23.357941
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:25:00",
                "number_stations_in_view": 2,
                "stations_in_view": "MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.24365,
                    -21.655469
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:30:00",
                "number_stations_in_view": 2,
                "stations_in_view": "MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.138714,
                    -19.94158
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:35:00",
                "number_stations_in_view": 2,
                "stations_in_view": "MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.062961,
                    -18.217484
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:40:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.013281,
                    -16.484316
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:45:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -155.98672,
                    -14.74314
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:50:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -155.980458,
                    -12.994959
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-21:55:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -155.991797,
                    -11.240723
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:00:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.018146,
                    -9.481341
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:05:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.057,
                    -7.71768
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:10:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.105931,
                    -5.95058
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:15:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.162568,
                    -4.180855
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:20:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.224589,
                    -2.409299
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:25:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.2897,
                    -0.636695
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:30:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.35563,
                    1.136181
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:35:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.420109,
                    2.908557
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:40:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.48086,
                    4.679657
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:45:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.535584,
                    6.448696
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:50:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.581947,
                    8.214872
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-22:55:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.617562,
                    9.977367
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:00:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.639983,
                    11.735334
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:05:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.646682,
                    13.487893
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:10:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.635039,
                    15.234128
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:15:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.602325,
                    16.973073
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:20:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.545685,
                    18.703708
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:25:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.462123,
                    20.424953
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:30:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.348482,
                    22.135652
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:35:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.20143,
                    23.834571
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:40:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL MRL2 GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.01744,
                    25.520379
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:45:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -155.792774,
                    27.191641
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:50:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -155.523462,
                    28.846805
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/25-23:55:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -155.205293,
                    30.484182
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:00:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -154.833792,
                    32.101938
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:05:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -154.404218,
                    33.698068
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:10:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -153.911551,
                    35.270386
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:15:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -153.350497,
                    36.816496
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:20:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -152.715496,
                    38.333778
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:25:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -152.000742,
                    39.819364
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:30:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -151.200226,
                    41.270115
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:35:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -150.307792,
                    42.682597
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:40:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -149.317222,
                    44.053069
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:45:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -148.222357,
                    45.377455
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:50:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -147.017255,
                    46.651343
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-00:55:00",
                "number_stations_in_view": 3,
                "stations_in_view": "UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -145.696389,
                    47.869974
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:00:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -144.254905,
                    49.028252
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:05:00",
                "number_stations_in_view": 4,
                "stations_in_view": "UCLU UCAL METG GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -142.688918,
                    50.120765
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:10:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF UCLU UCAL METG GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -140.995873,
                    51.141826
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:15:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF UCLU UCAL METG GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -139.174929,
                    52.085533
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:20:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF UCLU UCAL METG GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -137.227376,
                    52.94586
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:25:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF UCLU UCAL METG GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -135.157035,
                    53.716774
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:30:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF UCLU UCAL METG GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -132.970617,
                    54.392377
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:35:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF UCLU UCAL METG GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -130.677973,
                    54.967078
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:40:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF UCLU UCAL METG GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -128.292201,
                    55.435779
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:45:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF UCLU UCAL METG GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -125.82955,
                    55.794074
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:50:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF UCLU UCAL METG GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -123.309093,
                    56.038431
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-01:55:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -120.752163,
                    56.166358
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:00:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.18158,
                    56.176525
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:05:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -115.620733,
                    56.068828
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:10:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -113.092606,
                    55.8444
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:15:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -110.618842,
                    55.505548
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:20:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -108.218938,
                    55.055643
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:25:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -105.90965,
                    54.498962
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:30:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -103.704619,
                    53.840501
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:35:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -101.614242,
                    53.085786
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:40:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -99.645743,
                    52.240677
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:45:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -97.803407,
                    51.311199
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:50:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -96.088924,
                    50.30339
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-02:55:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -94.501783,
                    49.223181
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:00:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -93.039689,
                    48.076301
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:05:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -91.698956,
                    46.868213
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:10:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -90.47487,
                    45.604068
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:15:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -89.362,
                    44.288682
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:20:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -88.354458,
                    42.926529
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:25:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -87.446109,
                    41.521736
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:30:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -86.630738,
                    40.078102
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:35:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -85.902172,
                    38.599109
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:40:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -85.254371,
                    37.087944
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:45:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -84.681494,
                    35.547518
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:50:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -84.177938,
                    33.980492
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-03:55:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -83.738363,
                    32.389293
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:00:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -83.357705,
                    30.776142
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:05:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF RABT UCLU UCAL METG GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -83.031175,
                    29.143071
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:10:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF RABT UCLU UCAL GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.754257,
                    27.49194
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:15:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF RABT UCLU UCAL GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.522696,
                    25.824459
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:20:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF RABT UCLU UCAL GRAS GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.332484,
                    24.142202
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:25:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF RABT UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.179847,
                    22.446618
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:30:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF RABT UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.061223,
                    20.739054
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:35:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF RABT UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -81.973251,
                    19.020757
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:40:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF RABT UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -81.912747,
                    17.292894
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:45:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF RABT UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -81.876691,
                    15.556553
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:50:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF RABT UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -81.862207,
                    13.812764
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-04:55:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF RABT UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -81.866547,
                    12.062495
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:00:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF RABT UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -81.887076,
                    10.30667
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:05:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF RABT UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -81.921256,
                    8.546172
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:10:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -81.966626,
                    6.781849
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:15:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.020797,
                    5.014521
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:20:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.081428,
                    3.24499
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:25:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.146217,
                    1.474039
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:30:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.212889,
                    -0.297558
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:35:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.279178,
                    -2.06903
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:40:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.342816,
                    -3.839607
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:45:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.401519,
                    -5.608512
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:50:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.452974,
                    -7.374955
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-05:55:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.494827,
                    -9.138131
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:00:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.524663,
                    -10.897209
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:05:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.539999,
                    -12.65133
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:10:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF UCLU UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.538265,
                    -14.399599
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:15:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ABMF UCAL GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.516789,
                    -16.141077
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:20:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.472781,
                    -17.874775
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:25:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.403317,
                    -19.599645
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:30:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.305325,
                    -21.314573
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:35:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.175561,
                    -23.018365
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:40:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -82.010598,
                    -24.709742
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:45:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -81.806804,
                    -26.387324
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:50:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -81.560326,
                    -28.049619
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-06:55:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -81.267073,
                    -29.69501
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:00:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -80.922702,
                    -31.321737
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:05:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -80.522605,
                    -32.927882
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:10:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -80.061899,
                    -34.511352
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:15:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -79.535423,
                    -36.069858
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:20:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -78.937745,
                    -37.600893
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:25:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -78.263176,
                    -39.101715
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:30:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -77.505799,
                    -40.569321
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:35:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -76.659519,
                    -42.000424
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:40:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -75.718135,
                    -43.391436
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:45:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -74.675439,
                    -44.738447
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:50:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -73.525356,
                    -46.03721
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-07:55:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -72.262124,
                    -47.283135
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:00:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -70.880521,
                    -48.471288
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:05:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -69.376138,
                    -49.596405
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:10:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -67.745717,
                    -50.652926
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:15:00",
                "number_stations_in_view": 1,
                "stations_in_view": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -65.98752,
                    -51.635041
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:20:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -64.101733,
                    -52.536767
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:25:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -62.090883,
                    -53.352054
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:30:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -59.960218,
                    -54.07491
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:35:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -57.718023,
                    -54.699567
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:40:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -55.375799,
                    -55.220652
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:45:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ABMF RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -52.948277,
                    -55.63339
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:50:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ABMF ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -50.453203,
                    -55.933788
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-08:55:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -47.910893,
                    -56.11882
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:00:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -45.343553,
                    -56.186565
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:05:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -42.774424,
                    -56.136308
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:10:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -40.226822,
                    -55.968573
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:15:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -37.723171,
                    -55.685096
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:20:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -35.28412,
                    -55.28874
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:25:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -32.927844,
                    -54.783356
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:30:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -30.66955,
                    -54.173612
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:35:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -28.521237,
                    -53.464795
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:40:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -26.49167,
                    -52.662626
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:45:00",
                "number_stations_in_view": 2,
                "stations_in_view": "ZAMB RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -24.586542,
                    -51.773069
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:50:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -22.80877,
                    -50.802174
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-09:55:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -21.15887,
                    -49.755938
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:00:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -19.635371,
                    -48.640203
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:05:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -18.235218,
                    -47.460569
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:10:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -16.954157,
                    -46.222347
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:15:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -15.787071,
                    -44.930522
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:20:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -14.728261,
                    -43.589738
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:25:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -13.771687,
                    -42.204293
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:30:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -12.911153,
                    -40.778147
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:35:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -12.140449,
                    -39.314938
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:40:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ABMF ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -11.453455,
                    -37.817998
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:45:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -10.844226,
                    -36.290371
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:50:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -10.307033,
                    -34.734842
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-10:55:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -9.836404,
                    -33.15395
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:00:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -9.427136,
                    -31.550019
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:05:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -9.074302,
                    -29.925172
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:10:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.773253,
                    -28.281354
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:15:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.519603,
                    -26.620349
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:20:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.309225,
                    -24.943797
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:25:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.138228,
                    -23.25321
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:30:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.002948,
                    -21.549986
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:35:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.899925,
                    -19.835422
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:40:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.825889,
                    -18.110724
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:45:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.777739,
                    -16.377023
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:50:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.752529,
                    -14.635376
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-11:55:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.747448,
                    -12.886785
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:00:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.759806,
                    -11.132197
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:05:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.787015,
                    -9.372517
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:10:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.826578,
                    -7.608611
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:15:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.876069,
                    -5.841318
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:20:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.933122,
                    -4.071448
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:25:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.995416,
                    -2.299797
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:30:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.06066,
                    -0.527146
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:35:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.126582,
                    1.24573
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:40:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.190912,
                    3.018058
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:45:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.251374,
                    4.789062
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:50:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.305665,
                    6.557954
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-12:55:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.351449,
                    8.323936
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:00:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.386337,
                    10.086184
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:05:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.407877,
                    11.84385
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:10:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.413535,
                    13.596055
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:15:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.400687,
                    15.341876
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:20:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.366594,
                    17.080346
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:25:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.308395,
                    18.810442
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:30:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.223083,
                    20.531079
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:35:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -8.107492,
                    22.241096
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:40:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.958278,
                    23.939254
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:45:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.771902,
                    25.624215
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:50:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.544611,
                    27.294539
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-13:55:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -7.272421,
                    28.948665
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:00:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -6.951104,
                    30.584895
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:05:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -6.576171,
                    32.201386
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:10:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -6.142862,
                    33.796122
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:15:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -5.646141,
                    35.366903
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:20:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ABMF ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -5.080697,
                    36.911322
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:25:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -4.440952,
                    38.426744
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:30:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -3.721089,
                    39.910285
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:35:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -2.915085,
                    41.358787
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:40:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -2.016779,
                    42.768799
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:45:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -1.019951,
                    44.136559
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:50:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    0.081548,
                    45.457971
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-14:55:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    1.293642,
                    46.728601
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:00:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    2.621824,
                    47.943669
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:05:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    4.0709,
                    49.098058
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:10:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    5.644681,
                    50.186339
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:15:00",
                "number_stations_in_view": 8,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    7.34563,
                    51.202809
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:20:00",
                "number_stations_in_view": 8,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    9.174469,
                    52.141555
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:25:00",
                "number_stations_in_view": 8,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    11.129762,
                    52.996547
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:30:00",
                "number_stations_in_view": 8,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    13.207519,
                    53.761755
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:35:00",
                "number_stations_in_view": 8,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    15.400843,
                    54.431295
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:40:00",
                "number_stations_in_view": 8,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    17.699683,
                    54.999601
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:45:00",
                "number_stations_in_view": 8,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    20.09074,
                    55.461612
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:50:00",
                "number_stations_in_view": 8,
                "stations_in_view": "ABMF ZAMB RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    22.557579,
                    55.812969
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-15:55:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ZAMB RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    25.080967,
                    56.050202
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:00:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ZAMB RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    27.639456,
                    56.170886
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:05:00",
                "number_stations_in_view": 7,
                "stations_in_view": "ZAMB RABT RCMN UCLU UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    30.21016,
                    56.173766
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:10:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    32.769687,
                    56.058815
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:15:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    35.295108,
                    55.82724
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:20:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    37.764892,
                    55.481418
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:25:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    40.159691,
                    55.024781
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:30:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RABT RCMN UCAL METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    42.462937,
                    54.461656
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:35:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    44.661185,
                    53.797079
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:40:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    46.744239,
                    53.0366
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:45:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    48.705065,
                    52.186096
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:50:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    50.539546,
                    51.251596
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-16:55:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    52.246144,
                    50.239134
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:00:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    53.825489,
                    49.154633
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:05:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.279976,
                    48.003806
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:10:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    56.613363,
                    46.792099
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:15:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    57.830418,
                    45.524642
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:20:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    58.936608,
                    44.206231
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:25:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    59.937842,
                    42.841316
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:30:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    60.840263,
                    41.434007
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:35:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    61.650089,
                    39.988081
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:40:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    62.373486,
                    38.507001
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:45:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    63.016484,
                    36.993937
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:50:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    63.58491,
                    35.451785
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-17:55:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    64.084352,
                    33.883187
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:00:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    64.520133,
                    32.290561
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:05:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    64.897301,
                    30.676114
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:10:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.220627,
                    29.041866
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:15:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.49461,
                    27.389669
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:20:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.723491,
                    25.721223
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:25:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.911262,
                    24.038093
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:30:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.061685,
                    22.341724
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:35:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.178307,
                    20.633454
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:40:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.264479,
                    18.914526
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:45:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.323374,
                    17.1861
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:50:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.358002,
                    15.449263
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-18:55:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.371231,
                    13.705038
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:00:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.365802,
                    11.954393
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:05:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.344343,
                    10.198247
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:10:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.309388,
                    8.437482
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:15:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.263391,
                    6.672942
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:20:00",
                "number_stations_in_view": 6,
                "stations_in_view": "ZAMB RBAY RABT RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.208739,
                    4.905449
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:25:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RBAY RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.147771,
                    3.135801
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:30:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RBAY RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.082785,
                    1.36478
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:35:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RBAY RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.016056,
                    -0.406838
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:40:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RBAY RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.949851,
                    -2.178284
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:45:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RBAY RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.886437,
                    -3.948787
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:50:00",
                "number_stations_in_view": 5,
                "stations_in_view": "ZAMB RBAY RCMN METG GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.828099,
                    -5.71757
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-19:55:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.777152,
                    -7.483842
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:00:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.735956,
                    -9.246796
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:05:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.706926,
                    -11.005601
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:10:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.692553,
                    -12.759395
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:15:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.695411,
                    -14.507279
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:20:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.718181,
                    -16.248314
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:25:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.763658,
                    -17.981506
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:30:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.834776,
                    -19.705803
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:35:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    65.934617,
                    -21.420087
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:40:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.066436,
                    -23.12316
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:45:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.233671,
                    -24.813735
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:50:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.439969,
                    -26.490427
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-20:55:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.689197,
                    -28.151737
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:00:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.985459,
                    -29.796037
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:05:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    67.333115,
                    -31.421561
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:10:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    67.736792,
                    -33.02638
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:15:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    68.201388,
                    -34.608388
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:20:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    68.732082,
                    -36.165285
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:25:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    69.334321,
                    -37.694549
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:30:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    70.013811,
                    -39.193424
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:35:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    70.77648,
                    -40.658887
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:40:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    71.628433,
                    -42.087636
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:45:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    72.575876,
                    -43.476063
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:50:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    73.625013,
                    -44.820238
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-21:55:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    74.781903,
                    -46.115891
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:00:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    76.052285,
                    -47.358413
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:05:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    77.44134,
                    -48.542847
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:10:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    78.953414,
                    -49.663911
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:15:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    80.591684,
                    -50.716027
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:20:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    82.357783,
                    -51.693373
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:25:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    84.251391,
                    -52.589957
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:30:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    86.269825,
                    -53.399729
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:35:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    88.407657,
                    -54.116706
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:40:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    90.65641,
                    -54.735138
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:45:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    93.004378,
                    -55.249684
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:50:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    95.436638,
                    -55.65561
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-22:55:00",
                "number_stations_in_view": 4,
                "stations_in_view": "ZAMB RBAY RCMN MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    97.935269,
                    -55.94898
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:00:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    100.479816,
                    -56.12683
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:05:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    103.047982,
                    -56.187313
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:10:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    105.616493,
                    -56.129788
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:15:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    108.162058,
                    -55.954855
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:20:00",
                "number_stations_in_view": 3,
                "stations_in_view": "ZAMB RBAY MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    110.662339,
                    -55.664325
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:25:00",
                "number_stations_in_view": 2,
                "stations_in_view": "RBAY MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    113.096819,
                    -55.261125
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:30:00",
                "number_stations_in_view": 2,
                "stations_in_view": "RBAY MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    115.447496,
                    -54.749162
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:35:00",
                "number_stations_in_view": 2,
                "stations_in_view": "RBAY MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    117.699353,
                    -54.133146
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:40:00",
                "number_stations_in_view": 2,
                "stations_in_view": "RBAY MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    119.840592,
                    -53.4184
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:45:00",
                "number_stations_in_view": 2,
                "stations_in_view": "RBAY MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    121.862645,
                    -52.610662
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:50:00",
                "number_stations_in_view": 2,
                "stations_in_view": "RBAY MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    123.759999,
                    -51.715909
                ],
                "type": "Point"
            },
            "properties": {
                "epoch": "2020/12/26-23:55:00",
                "number_stations_in_view": 2,
                "stations_in_view": "RBAY MRL2"
            },
            "type": "Feature"
        }
    ],
    "type": "FeatureCollection"
}

export const E21Polygon = {
    "features": [
        {
            "geometry": {
                "coordinates": [
                    [
                        -19.53603,
                        29.346456
                    ],
                    [
                        -19.253154,
                        27.697493
                    ],
                    [
                        -19.016149,
                        26.031976
                    ],
                    [
                        -18.820979,
                        24.351492
                    ],
                    [
                        -18.663839,
                        22.657508
                    ],
                    [
                        -18.541143,
                        20.951381
                    ],
                    [
                        -18.449506,
                        19.234371
                    ],
                    [
                        -18.385724,
                        17.507653
                    ],
                    [
                        -18.346757,
                        15.772327
                    ],
                    [
                        -18.329711,
                        14.029426
                    ],
                    [
                        -18.331825,
                        12.279928
                    ],
                    [
                        -18.350449,
                        10.524762
                    ],
                    [
                        -18.383034,
                        8.764814
                    ],
                    [
                        -18.427112,
                        7.000937
                    ],
                    [
                        -18.480283,
                        5.233956
                    ],
                    [
                        -18.540202,
                        3.464672
                    ],
                    [
                        -18.604565,
                        1.693872
                    ],
                    [
                        -18.671091,
                        -0.07767
                    ],
                    [
                        -18.737516,
                        -1.849183
                    ],
                    [
                        -18.801571,
                        -3.619897
                    ],
                    [
                        -18.860976,
                        -5.389035
                    ],
                    [
                        -18.913423,
                        -7.155811
                    ],
                    [
                        -18.956562,
                        -8.91942
                    ],
                    [
                        -18.987987,
                        -10.679035
                    ],
                    [
                        -19.005226,
                        -12.433802
                    ],
                    [
                        -19.005717,
                        -14.18283
                    ],
                    [
                        -18.986804,
                        -15.925185
                    ],
                    [
                        -18.945712,
                        -17.659886
                    ],
                    [
                        -18.879536,
                        -19.385893
                    ],
                    [
                        -18.78522,
                        -21.102099
                    ],
                    [
                        -18.659545,
                        -22.807321
                    ],
                    [
                        -18.499107,
                        -24.500292
                    ],
                    [
                        -18.3003,
                        -26.179644
                    ],
                    [
                        -18.0593,
                        -27.8439
                    ],
                    [
                        -17.772046,
                        -29.491459
                    ],
                    [
                        -17.434228,
                        -31.12058
                    ],
                    [
                        -17.04127,
                        -32.729366
                    ],
                    [
                        -16.588324,
                        -34.315746
                    ],
                    [
                        -16.070265,
                        -35.877456
                    ],
                    [
                        -15.481693,
                        -37.412018
                    ],
                    [
                        -14.81695,
                        -38.916721
                    ],
                    [
                        -14.070147,
                        -40.388593
                    ],
                    [
                        -13.235206,
                        -41.824385
                    ],
                    [
                        -12.305935,
                        -43.220548
                    ],
                    [
                        -11.276122,
                        -44.573212
                    ],
                    [
                        -10.139668,
                        -45.878173
                    ],
                    [
                        -8.890759,
                        -47.130883
                    ],
                    [
                        -7.524094,
                        -48.326451
                    ],
                    [
                        -6.035148,
                        -49.459653
                    ],
                    [
                        -4.4205,
                        -50.524963
                    ],
                    [
                        -2.678204,
                        -51.516599
                    ],
                    [
                        -0.808185,
                        -52.428595
                    ],
                    [
                        1.187342,
                        -53.254903
                    ],
                    [
                        3.303484,
                        -53.989517
                    ],
                    [
                        5.532347,
                        -54.62663
                    ],
                    [
                        7.862832,
                        -55.160812
                    ],
                    [
                        10.280604,
                        -55.587202
                    ],
                    [
                        12.768272,
                        -55.901703
                    ],
                    [
                        15.305808,
                        -56.101158
                    ],
                    [
                        17.8712,
                        -56.183505
                    ],
                    [
                        20.441286,
                        -56.147875
                    ],
                    [
                        22.992708,
                        -55.994639
                    ],
                    [
                        25.502883,
                        -55.725386
                    ],
                    [
                        27.950901,
                        -55.342846
                    ],
                    [
                        30.318252,
                        -54.850756
                    ],
                    [
                        32.589343,
                        -54.253691
                    ],
                    [
                        34.751773,
                        -53.556874
                    ],
                    [
                        36.796382,
                        -52.765981
                    ],
                    [
                        38.717109,
                        -51.886953
                    ],
                    [
                        40.510712,
                        -50.925839
                    ],
                    [
                        42.176398,
                        -49.888649
                    ],
                    [
                        43.715416,
                        -48.781246
                    ],
                    [
                        45.130642,
                        -47.609266
                    ],
                    [
                        46.426202,
                        -46.378057
                    ],
                    [
                        47.607123,
                        -45.092644
                    ],
                    [
                        48.679042,
                        -43.757715
                    ],
                    [
                        49.647968,
                        -42.37761
                    ],
                    [
                        50.520086,
                        -40.956332
                    ],
                    [
                        51.301611,
                        -39.497555
                    ],
                    [
                        51.998677,
                        -38.00465
                    ],
                    [
                        52.617255,
                        -36.480694
                    ],
                    [
                        53.163101,
                        -34.928504
                    ],
                    [
                        53.64172,
                        -33.350648
                    ],
                    [
                        54.05835,
                        -31.749475
                    ],
                    [
                        54.417951,
                        -30.127133
                    ],
                    [
                        54.725206,
                        -28.485588
                    ],
                    [
                        54.984533,
                        -26.826641
                    ],
                    [
                        55.20009,
                        -25.151951
                    ],
                    [
                        55.375796,
                        -23.463045
                    ],
                    [
                        55.515344,
                        -21.761334
                    ],
                    [
                        55.622216,
                        -20.048127
                    ],
                    [
                        55.699705,
                        -18.324641
                    ],
                    [
                        55.750933,
                        -16.592014
                    ],
                    [
                        55.778864,
                        -14.851315
                    ],
                    [
                        55.786324,
                        -13.103549
                    ],
                    [
                        55.776018,
                        -11.349672
                    ],
                    [
                        55.750544,
                        -9.590592
                    ],
                    [
                        55.712413,
                        -7.827181
                    ],
                    [
                        55.664055,
                        -6.06028
                    ],
                    [
                        55.607846,
                        -4.290703
                    ],
                    [
                        55.54611,
                        -2.519246
                    ],
                    [
                        55.481142,
                        -0.746694
                    ],
                    [
                        55.415214,
                        1.026179
                    ],
                    [
                        55.350597,
                        2.7986
                    ],
                    [
                        55.289565,
                        4.569793
                    ],
                    [
                        55.234417,
                        6.338974
                    ],
                    [
                        55.187485,
                        8.105342
                    ],
                    [
                        55.151149,
                        9.868081
                    ],
                    [
                        55.127855,
                        11.626345
                    ],
                    [
                        55.120123,
                        13.379257
                    ],
                    [
                        55.130567,
                        15.125902
                    ],
                    [
                        55.16191,
                        16.865318
                    ],
                    [
                        55.216998,
                        18.59649
                    ],
                    [
                        55.298818,
                        20.31834
                    ],
                    [
                        55.410516,
                        22.029719
                    ],
                    [
                        55.555412,
                        23.729395
                    ],
                    [
                        55.737021,
                        25.416046
                    ],
                    [
                        55.959069,
                        27.088244
                    ],
                    [
                        56.225508,
                        28.744443
                    ],
                    [
                        56.540537,
                        30.382964
                    ],
                    [
                        56.908611,
                        32.001981
                    ],
                    [
                        57.334457,
                        33.599502
                    ],
                    [
                        57.823075,
                        35.173351
                    ],
                    [
                        58.379743,
                        36.721148
                    ],
                    [
                        59.010006,
                        38.240286
                    ],
                    [
                        59.719654,
                        39.727912
                    ],
                    [
                        60.514685,
                        41.180906
                    ],
                    [
                        61.401249,
                        42.595853
                    ],
                    [
                        62.385561,
                        43.96903
                    ],
                    [
                        63.473788,
                        45.296384
                    ],
                    [
                        64.671892,
                        46.573523
                    ],
                    [
                        65.985431,
                        47.79571
                    ],
                    [
                        67.419309,
                        48.95787
                    ],
                    [
                        68.977479,
                        50.054609
                    ],
                    [
                        70.662591,
                        51.080255
                    ],
                    [
                        72.475603,
                        52.028919
                    ],
                    [
                        74.41537,
                        52.894579
                    ],
                    [
                        76.478236,
                        53.671197
                    ],
                    [
                        78.65768,
                        54.352865
                    ],
                    [
                        80.944051,
                        54.933965
                    ],
                    [
                        83.324451,
                        55.409366
                    ],
                    [
                        85.78282,
                        55.774611
                    ],
                    [
                        88.300247,
                        56.02611
                    ],
                    [
                        90.85552,
                        56.161304
                    ],
                    [
                        93.425886,
                        56.178786
                    ],
                    [
                        95.987964,
                        56.078377
                    ],
                    [
                        98.518719,
                        55.861134
                    ],
                    [
                        100.996402,
                        55.529293
                    ],
                    [
                        103.40136,
                        55.086164
                    ],
                    [
                        105.716658,
                        54.535972
                    ],
                    [
                        107.928455,
                        53.883675
                    ],
                    [
                        110.026154,
                        53.13477
                    ],
                    [
                        112.002339,
                        52.295103
                    ],
                    [
                        113.852551,
                        51.370692
                    ],
                    [
                        115.574952,
                        50.367578
                    ],
                    [
                        117.169927,
                        49.291702
                    ],
                    [
                        118.639673,
                        48.148807
                    ],
                    [
                        119.987799,
                        46.944373
                    ],
                    [
                        121.218965,
                        45.683574
                    ],
                    [
                        122.338565,
                        44.371245
                    ],
                    [
                        123.352465,
                        43.01188
                    ],
                    [
                        124.26679,
                        41.60963
                    ],
                    [
                        125.087754,
                        40.168312
                    ],
                    [
                        125.821534,
                        38.691428
                    ],
                    [
                        126.474182,
                        37.182182
                    ],
                    [
                        127.05155,
                        35.643503
                    ],
                    [
                        127.559259,
                        34.078064
                    ],
                    [
                        128.002664,
                        32.488308
                    ],
                    [
                        128.386847,
                        30.876468
                    ],
                    [
                        128.716613,
                        29.244586
                    ],
                    [
                        128.996495,
                        27.594534
                    ],
                    [
                        129.230764,
                        25.92803
                    ],
                    [
                        129.423443,
                        24.246654
                    ],
                    [
                        129.57832,
                        22.551866
                    ],
                    [
                        129.698968,
                        20.845017
                    ],
                    [
                        129.788763,
                        19.12736
                    ],
                    [
                        129.850896,
                        17.400066
                    ],
                    [
                        129.888399,
                        15.664229
                    ],
                    [
                        129.904156,
                        13.920881
                    ],
                    [
                        129.900921,
                        12.170995
                    ],
                    [
                        129.881337,
                        10.415497
                    ],
                    [
                        129.847949,
                        8.655272
                    ],
                    [
                        129.803218,
                        6.89117
                    ],
                    [
                        129.749541,
                        5.124014
                    ],
                    [
                        129.689261,
                        3.354604
                    ],
                    [
                        129.62468,
                        1.583727
                    ],
                    [
                        129.558076,
                        -0.187844
                    ],
                    [
                        129.491715,
                        -1.959338
                    ],
                    [
                        129.427864,
                        -3.729985
                    ],
                    [
                        129.368806,
                        -5.499008
                    ],
                    [
                        129.316851,
                        -7.265619
                    ],
                    [
                        129.274351,
                        -9.029012
                    ],
                    [
                        129.243717,
                        -10.788361
                    ],
                    [
                        129.227426,
                        -12.542806
                    ],
                    [
                        129.228044,
                        -14.291455
                    ],
                    [
                        129.248236,
                        -16.033373
                    ],
                    [
                        129.290783,
                        -17.767574
                    ],
                    [
                        129.3586,
                        -19.493013
                    ],
                    [
                        129.454752,
                        -21.208581
                    ],
                    [
                        129.582468,
                        -22.91309
                    ],
                    [
                        129.745166,
                        -24.605264
                    ],
                    [
                        129.946464,
                        -26.283733
                    ],
                    [
                        130.190201,
                        -27.94701
                    ],
                    [
                        130.480451,
                        -29.593486
                    ],
                    [
                        130.821543,
                        -31.221411
                    ],
                    [
                        131.218068,
                        -32.828878
                    ],
                    [
                        131.674892,
                        -34.413805
                    ],
                    [
                        132.197158,
                        -35.973914
                    ],
                    [
                        132.790281,
                        -37.506715
                    ],
                    [
                        133.459935,
                        -39.00948
                    ],
                    [
                        134.212024,
                        -40.47922
                    ],
                    [
                        135.052634,
                        -41.91267
                    ],
                    [
                        135.987961,
                        -43.30626
                    ],
                    [
                        137.024217,
                        -44.6561
                    ],
                    [
                        138.167489,
                        -45.957965
                    ],
                    [
                        139.423563,
                        -47.207286
                    ],
                    [
                        140.797704,
                        -48.399149
                    ],
                    [
                        142.294378,
                        -49.528311
                    ],
                    [
                        143.916924,
                        -50.589229
                    ],
                    [
                        145.667187,
                        -51.576106
                    ],
                    [
                        147.545111,
                        -52.482969
                    ],
                    [
                        149.548325,
                        -53.303767
                    ],
                    [
                        151.671759,
                        -54.032501
                    ],
                    [
                        153.907325,
                        -54.663384
                    ],
                    [
                        156.24372,
                        -55.191014
                    ],
                    [
                        158.666412,
                        -55.610572
                    ],
                    [
                        161.157829,
                        -55.918013
                    ],
                    [
                        163.697801,
                        -56.110246
                    ],
                    [
                        166.264215,
                        -56.185279
                    ],
                    [
                        168.833868,
                        -56.142319
                    ],
                    [
                        171.38342,
                        -55.981815
                    ],
                    [
                        173.890368,
                        -55.70543
                    ],
                    [
                        176.33393,
                        -55.315961
                    ],
                    [
                        178.695763,
                        -54.817202
                    ],
                    [
                        -179.039533,
                        -54.213773
                    ],
                    [
                        -176.884158,
                        -53.510933
                    ],
                    [
                        -174.847074,
                        -52.714378
                    ],
                    [
                        -172.934156,
                        -51.830063
                    ],
                    [
                        -171.148483,
                        -50.864037
                    ],
                    [
                        -169.490708,
                        -49.822303
                    ],
                    [
                        -167.959471,
                        -48.710714
                    ],
                    [
                        -166.551805,
                        -47.534888
                    ],
                    [
                        -165.263519,
                        -46.300156
                    ],
                    [
                        -164.089541,
                        -45.011521
                    ],
                    [
                        -163.024201,
                        -43.67365
                    ],
                    [
                        -162.061477,
                        -42.290861
                    ],
                    [
                        -161.195175,
                        -40.867137
                    ],
                    [
                        -160.419083,
                        -39.406133
                    ],
                    [
                        -159.727076,
                        -37.911199
                    ],
                    [
                        -159.113193,
                        -36.385399
                    ],
                    [
                        -158.571694,
                        -34.83153
                    ],
                    [
                        -158.097088,
                        -33.252148
                    ],
                    [
                        -157.684157,
                        -31.649589
                    ],
                    [
                        -157.327956,
                        -30.025988
                    ],
                    [
                        -157.023819,
                        -28.3833
                    ],
                    [
                        -156.767346,
                        -26.723318
                    ],
                    [
                        -156.554391,
                        -25.047692
                    ],
                    [
                        -156.381052,
                        -23.357941
                    ],
                    [
                        -156.24365,
                        -21.655469
                    ],
                    [
                        -156.138714,
                        -19.94158
                    ],
                    [
                        -156.062961,
                        -18.217484
                    ],
                    [
                        -156.013281,
                        -16.484316
                    ],
                    [
                        -155.98672,
                        -14.74314
                    ],
                    [
                        -155.980458,
                        -12.994959
                    ],
                    [
                        -155.991797,
                        -11.240723
                    ],
                    [
                        -156.018146,
                        -9.481341
                    ],
                    [
                        -156.057,
                        -7.71768
                    ],
                    [
                        -156.105931,
                        -5.95058
                    ],
                    [
                        -156.162568,
                        -4.180855
                    ],
                    [
                        -156.224589,
                        -2.409299
                    ],
                    [
                        -156.2897,
                        -0.636695
                    ],
                    [
                        -156.35563,
                        1.136181
                    ],
                    [
                        -156.420109,
                        2.908557
                    ],
                    [
                        -156.48086,
                        4.679657
                    ],
                    [
                        -156.535584,
                        6.448696
                    ],
                    [
                        -156.581947,
                        8.214872
                    ],
                    [
                        -156.617562,
                        9.977367
                    ],
                    [
                        -156.639983,
                        11.735334
                    ],
                    [
                        -156.646682,
                        13.487893
                    ],
                    [
                        -156.635039,
                        15.234128
                    ],
                    [
                        -156.602325,
                        16.973073
                    ],
                    [
                        -156.545685,
                        18.703708
                    ],
                    [
                        -156.462123,
                        20.424953
                    ],
                    [
                        -156.348482,
                        22.135652
                    ],
                    [
                        -156.20143,
                        23.834571
                    ],
                    [
                        -156.01744,
                        25.520379
                    ],
                    [
                        -155.792774,
                        27.191641
                    ],
                    [
                        -155.523462,
                        28.846805
                    ],
                    [
                        -155.205293,
                        30.484182
                    ],
                    [
                        -154.833792,
                        32.101938
                    ],
                    [
                        -154.404218,
                        33.698068
                    ],
                    [
                        -153.911551,
                        35.270386
                    ],
                    [
                        -153.350497,
                        36.816496
                    ],
                    [
                        -152.715496,
                        38.333778
                    ],
                    [
                        -152.000742,
                        39.819364
                    ],
                    [
                        -151.200226,
                        41.270115
                    ],
                    [
                        -150.307792,
                        42.682597
                    ],
                    [
                        -149.317222,
                        44.053069
                    ],
                    [
                        -148.222357,
                        45.377455
                    ],
                    [
                        -147.017255,
                        46.651343
                    ],
                    [
                        -145.696389,
                        47.869974
                    ],
                    [
                        -144.254905,
                        49.028252
                    ],
                    [
                        -142.688918,
                        50.120765
                    ],
                    [
                        -140.995873,
                        51.141826
                    ],
                    [
                        -139.174929,
                        52.085533
                    ],
                    [
                        -137.227376,
                        52.94586
                    ],
                    [
                        -135.157035,
                        53.716774
                    ],
                    [
                        -132.970617,
                        54.392377
                    ],
                    [
                        -130.677973,
                        54.967078
                    ],
                    [
                        -128.292201,
                        55.435779
                    ],
                    [
                        -125.82955,
                        55.794074
                    ],
                    [
                        -123.309093,
                        56.038431
                    ],
                    [
                        -120.752163,
                        56.166358
                    ],
                    [
                        -118.18158,
                        56.176525
                    ],
                    [
                        -115.620733,
                        56.068828
                    ],
                    [
                        -113.092606,
                        55.8444
                    ],
                    [
                        -110.618842,
                        55.505548
                    ],
                    [
                        -108.218938,
                        55.055643
                    ],
                    [
                        -105.90965,
                        54.498962
                    ],
                    [
                        -103.704619,
                        53.840501
                    ],
                    [
                        -101.614242,
                        53.085786
                    ],
                    [
                        -99.645743,
                        52.240677
                    ],
                    [
                        -97.803407,
                        51.311199
                    ],
                    [
                        -96.088924,
                        50.30339
                    ],
                    [
                        -94.501783,
                        49.223181
                    ],
                    [
                        -93.039689,
                        48.076301
                    ],
                    [
                        -91.698956,
                        46.868213
                    ],
                    [
                        -90.47487,
                        45.604068
                    ],
                    [
                        -89.362,
                        44.288682
                    ],
                    [
                        -88.354458,
                        42.926529
                    ],
                    [
                        -87.446109,
                        41.521736
                    ],
                    [
                        -86.630738,
                        40.078102
                    ],
                    [
                        -85.902172,
                        38.599109
                    ],
                    [
                        -85.254371,
                        37.087944
                    ],
                    [
                        -84.681494,
                        35.547518
                    ],
                    [
                        -84.177938,
                        33.980492
                    ],
                    [
                        -83.738363,
                        32.389293
                    ],
                    [
                        -83.357705,
                        30.776142
                    ],
                    [
                        -83.031175,
                        29.143071
                    ],
                    [
                        -82.754257,
                        27.49194
                    ],
                    [
                        -82.522696,
                        25.824459
                    ],
                    [
                        -82.332484,
                        24.142202
                    ],
                    [
                        -82.179847,
                        22.446618
                    ],
                    [
                        -82.061223,
                        20.739054
                    ],
                    [
                        -81.973251,
                        19.020757
                    ],
                    [
                        -81.912747,
                        17.292894
                    ],
                    [
                        -81.876691,
                        15.556553
                    ],
                    [
                        -81.862207,
                        13.812764
                    ],
                    [
                        -81.866547,
                        12.062495
                    ],
                    [
                        -81.887076,
                        10.30667
                    ],
                    [
                        -81.921256,
                        8.546172
                    ],
                    [
                        -81.966626,
                        6.781849
                    ],
                    [
                        -82.020797,
                        5.014521
                    ],
                    [
                        -82.081428,
                        3.24499
                    ],
                    [
                        -82.146217,
                        1.474039
                    ],
                    [
                        -82.212889,
                        -0.297558
                    ],
                    [
                        -82.279178,
                        -2.06903
                    ],
                    [
                        -82.342816,
                        -3.839607
                    ],
                    [
                        -82.401519,
                        -5.608512
                    ],
                    [
                        -82.452974,
                        -7.374955
                    ],
                    [
                        -82.494827,
                        -9.138131
                    ],
                    [
                        -82.524663,
                        -10.897209
                    ],
                    [
                        -82.539999,
                        -12.65133
                    ],
                    [
                        -82.538265,
                        -14.399599
                    ],
                    [
                        -82.516789,
                        -16.141077
                    ],
                    [
                        -82.472781,
                        -17.874775
                    ],
                    [
                        -82.403317,
                        -19.599645
                    ],
                    [
                        -82.305325,
                        -21.314573
                    ],
                    [
                        -82.175561,
                        -23.018365
                    ],
                    [
                        -82.010598,
                        -24.709742
                    ],
                    [
                        -81.806804,
                        -26.387324
                    ],
                    [
                        -81.560326,
                        -28.049619
                    ],
                    [
                        -81.267073,
                        -29.69501
                    ],
                    [
                        -80.922702,
                        -31.321737
                    ],
                    [
                        -80.522605,
                        -32.927882
                    ],
                    [
                        -80.061899,
                        -34.511352
                    ],
                    [
                        -79.535423,
                        -36.069858
                    ],
                    [
                        -78.937745,
                        -37.600893
                    ],
                    [
                        -78.263176,
                        -39.101715
                    ],
                    [
                        -77.505799,
                        -40.569321
                    ],
                    [
                        -76.659519,
                        -42.000424
                    ],
                    [
                        -75.718135,
                        -43.391436
                    ],
                    [
                        -74.675439,
                        -44.738447
                    ],
                    [
                        -73.525356,
                        -46.03721
                    ],
                    [
                        -72.262124,
                        -47.283135
                    ],
                    [
                        -70.880521,
                        -48.471288
                    ],
                    [
                        -69.376138,
                        -49.596405
                    ],
                    [
                        -67.745717,
                        -50.652926
                    ],
                    [
                        -65.98752,
                        -51.635041
                    ],
                    [
                        -64.101733,
                        -52.536767
                    ],
                    [
                        -62.090883,
                        -53.352054
                    ],
                    [
                        -59.960218,
                        -54.07491
                    ],
                    [
                        -57.718023,
                        -54.699567
                    ],
                    [
                        -55.375799,
                        -55.220652
                    ],
                    [
                        -52.948277,
                        -55.63339
                    ],
                    [
                        -50.453203,
                        -55.933788
                    ],
                    [
                        -47.910893,
                        -56.11882
                    ],
                    [
                        -45.343553,
                        -56.186565
                    ],
                    [
                        -42.774424,
                        -56.136308
                    ],
                    [
                        -40.226822,
                        -55.968573
                    ],
                    [
                        -37.723171,
                        -55.685096
                    ],
                    [
                        -35.28412,
                        -55.28874
                    ],
                    [
                        -32.927844,
                        -54.783356
                    ],
                    [
                        -30.66955,
                        -54.173612
                    ],
                    [
                        -28.521237,
                        -53.464795
                    ],
                    [
                        -26.49167,
                        -52.662626
                    ],
                    [
                        -24.586542,
                        -51.773069
                    ],
                    [
                        -22.80877,
                        -50.802174
                    ],
                    [
                        -21.15887,
                        -49.755938
                    ],
                    [
                        -19.635371,
                        -48.640203
                    ],
                    [
                        -18.235218,
                        -47.460569
                    ],
                    [
                        -16.954157,
                        -46.222347
                    ],
                    [
                        -15.787071,
                        -44.930522
                    ],
                    [
                        -14.728261,
                        -43.589738
                    ],
                    [
                        -13.771687,
                        -42.204293
                    ],
                    [
                        -12.911153,
                        -40.778147
                    ],
                    [
                        -12.140449,
                        -39.314938
                    ],
                    [
                        -11.453455,
                        -37.817998
                    ],
                    [
                        -10.844226,
                        -36.290371
                    ],
                    [
                        -10.307033,
                        -34.734842
                    ],
                    [
                        -9.836404,
                        -33.15395
                    ],
                    [
                        -9.427136,
                        -31.550019
                    ],
                    [
                        -9.074302,
                        -29.925172
                    ],
                    [
                        -8.773253,
                        -28.281354
                    ],
                    [
                        -8.519603,
                        -26.620349
                    ],
                    [
                        -8.309225,
                        -24.943797
                    ],
                    [
                        -8.138228,
                        -23.25321
                    ],
                    [
                        -8.002948,
                        -21.549986
                    ],
                    [
                        -7.899925,
                        -19.835422
                    ],
                    [
                        -7.825889,
                        -18.110724
                    ],
                    [
                        -7.777739,
                        -16.377023
                    ],
                    [
                        -7.752529,
                        -14.635376
                    ],
                    [
                        -7.747448,
                        -12.886785
                    ],
                    [
                        -7.759806,
                        -11.132197
                    ],
                    [
                        -7.787015,
                        -9.372517
                    ],
                    [
                        -7.826578,
                        -7.608611
                    ],
                    [
                        -7.876069,
                        -5.841318
                    ],
                    [
                        -7.933122,
                        -4.071448
                    ],
                    [
                        -7.995416,
                        -2.299797
                    ],
                    [
                        -8.06066,
                        -0.527146
                    ],
                    [
                        -8.126582,
                        1.24573
                    ],
                    [
                        -8.190912,
                        3.018058
                    ],
                    [
                        -8.251374,
                        4.789062
                    ],
                    [
                        -8.305665,
                        6.557954
                    ],
                    [
                        -8.351449,
                        8.323936
                    ],
                    [
                        -8.386337,
                        10.086184
                    ],
                    [
                        -8.407877,
                        11.84385
                    ],
                    [
                        -8.413535,
                        13.596055
                    ],
                    [
                        -8.400687,
                        15.341876
                    ],
                    [
                        -8.366594,
                        17.080346
                    ],
                    [
                        -8.308395,
                        18.810442
                    ],
                    [
                        -8.223083,
                        20.531079
                    ],
                    [
                        -8.107492,
                        22.241096
                    ],
                    [
                        -7.958278,
                        23.939254
                    ],
                    [
                        -7.771902,
                        25.624215
                    ],
                    [
                        -7.544611,
                        27.294539
                    ],
                    [
                        -7.272421,
                        28.948665
                    ],
                    [
                        -6.951104,
                        30.584895
                    ],
                    [
                        -6.576171,
                        32.201386
                    ],
                    [
                        -6.142862,
                        33.796122
                    ],
                    [
                        -5.646141,
                        35.366903
                    ],
                    [
                        -5.080697,
                        36.911322
                    ],
                    [
                        -4.440952,
                        38.426744
                    ],
                    [
                        -3.721089,
                        39.910285
                    ],
                    [
                        -2.915085,
                        41.358787
                    ],
                    [
                        -2.016779,
                        42.768799
                    ],
                    [
                        -1.019951,
                        44.136559
                    ],
                    [
                        0.081548,
                        45.457971
                    ],
                    [
                        1.293642,
                        46.728601
                    ],
                    [
                        2.621824,
                        47.943669
                    ],
                    [
                        4.0709,
                        49.098058
                    ],
                    [
                        5.644681,
                        50.186339
                    ],
                    [
                        7.34563,
                        51.202809
                    ],
                    [
                        9.174469,
                        52.141555
                    ],
                    [
                        11.129762,
                        52.996547
                    ],
                    [
                        13.207519,
                        53.761755
                    ],
                    [
                        15.400843,
                        54.431295
                    ],
                    [
                        17.699683,
                        54.999601
                    ],
                    [
                        20.09074,
                        55.461612
                    ],
                    [
                        22.557579,
                        55.812969
                    ],
                    [
                        25.080967,
                        56.050202
                    ],
                    [
                        27.639456,
                        56.170886
                    ],
                    [
                        30.21016,
                        56.173766
                    ],
                    [
                        32.769687,
                        56.058815
                    ],
                    [
                        35.295108,
                        55.82724
                    ],
                    [
                        37.764892,
                        55.481418
                    ],
                    [
                        40.159691,
                        55.024781
                    ],
                    [
                        42.462937,
                        54.461656
                    ],
                    [
                        44.661185,
                        53.797079
                    ],
                    [
                        46.744239,
                        53.0366
                    ],
                    [
                        48.705065,
                        52.186096
                    ],
                    [
                        50.539546,
                        51.251596
                    ],
                    [
                        52.246144,
                        50.239134
                    ],
                    [
                        53.825489,
                        49.154633
                    ],
                    [
                        55.279976,
                        48.003806
                    ],
                    [
                        56.613363,
                        46.792099
                    ],
                    [
                        57.830418,
                        45.524642
                    ],
                    [
                        58.936608,
                        44.206231
                    ],
                    [
                        59.937842,
                        42.841316
                    ],
                    [
                        60.840263,
                        41.434007
                    ],
                    [
                        61.650089,
                        39.988081
                    ],
                    [
                        62.373486,
                        38.507001
                    ],
                    [
                        63.016484,
                        36.993937
                    ],
                    [
                        63.58491,
                        35.451785
                    ],
                    [
                        64.084352,
                        33.883187
                    ],
                    [
                        64.520133,
                        32.290561
                    ],
                    [
                        64.897301,
                        30.676114
                    ],
                    [
                        65.220627,
                        29.041866
                    ],
                    [
                        65.49461,
                        27.389669
                    ],
                    [
                        65.723491,
                        25.721223
                    ],
                    [
                        65.911262,
                        24.038093
                    ],
                    [
                        66.061685,
                        22.341724
                    ],
                    [
                        66.178307,
                        20.633454
                    ],
                    [
                        66.264479,
                        18.914526
                    ],
                    [
                        66.323374,
                        17.1861
                    ],
                    [
                        66.358002,
                        15.449263
                    ],
                    [
                        66.371231,
                        13.705038
                    ],
                    [
                        66.365802,
                        11.954393
                    ],
                    [
                        66.344343,
                        10.198247
                    ],
                    [
                        66.309388,
                        8.437482
                    ],
                    [
                        66.263391,
                        6.672942
                    ],
                    [
                        66.208739,
                        4.905449
                    ],
                    [
                        66.147771,
                        3.135801
                    ],
                    [
                        66.082785,
                        1.36478
                    ],
                    [
                        66.016056,
                        -0.406838
                    ],
                    [
                        65.949851,
                        -2.178284
                    ],
                    [
                        65.886437,
                        -3.948787
                    ],
                    [
                        65.828099,
                        -5.71757
                    ],
                    [
                        65.777152,
                        -7.483842
                    ],
                    [
                        65.735956,
                        -9.246796
                    ],
                    [
                        65.706926,
                        -11.005601
                    ],
                    [
                        65.692553,
                        -12.759395
                    ],
                    [
                        65.695411,
                        -14.507279
                    ],
                    [
                        65.718181,
                        -16.248314
                    ],
                    [
                        65.763658,
                        -17.981506
                    ],
                    [
                        65.834776,
                        -19.705803
                    ],
                    [
                        65.934617,
                        -21.420087
                    ],
                    [
                        66.066436,
                        -23.12316
                    ],
                    [
                        66.233671,
                        -24.813735
                    ],
                    [
                        66.439969,
                        -26.490427
                    ],
                    [
                        66.689197,
                        -28.151737
                    ],
                    [
                        66.985459,
                        -29.796037
                    ],
                    [
                        67.333115,
                        -31.421561
                    ],
                    [
                        67.736792,
                        -33.02638
                    ],
                    [
                        68.201388,
                        -34.608388
                    ],
                    [
                        68.732082,
                        -36.165285
                    ],
                    [
                        69.334321,
                        -37.694549
                    ],
                    [
                        70.013811,
                        -39.193424
                    ],
                    [
                        70.77648,
                        -40.658887
                    ],
                    [
                        71.628433,
                        -42.087636
                    ],
                    [
                        72.575876,
                        -43.476063
                    ],
                    [
                        73.625013,
                        -44.820238
                    ],
                    [
                        74.781903,
                        -46.115891
                    ],
                    [
                        76.052285,
                        -47.358413
                    ],
                    [
                        77.44134,
                        -48.542847
                    ],
                    [
                        78.953414,
                        -49.663911
                    ],
                    [
                        80.591684,
                        -50.716027
                    ],
                    [
                        82.357783,
                        -51.693373
                    ],
                    [
                        84.251391,
                        -52.589957
                    ],
                    [
                        86.269825,
                        -53.399729
                    ],
                    [
                        88.407657,
                        -54.116706
                    ],
                    [
                        90.65641,
                        -54.735138
                    ],
                    [
                        93.004378,
                        -55.249684
                    ],
                    [
                        95.436638,
                        -55.65561
                    ],
                    [
                        97.935269,
                        -55.94898
                    ],
                    [
                        100.479816,
                        -56.12683
                    ],
                    [
                        103.047982,
                        -56.187313
                    ],
                    [
                        105.616493,
                        -56.129788
                    ],
                    [
                        108.162058,
                        -55.954855
                    ],
                    [
                        110.662339,
                        -55.664325
                    ],
                    [
                        113.096819,
                        -55.261125
                    ],
                    [
                        115.447496,
                        -54.749162
                    ],
                    [
                        117.699353,
                        -54.133146
                    ],
                    [
                        119.840592,
                        -53.4184
                    ],
                    [
                        121.862645,
                        -52.610662
                    ],
                    [
                        123.759999,
                        -51.715909
                    ]
                ],
                "type": "LineString"
            },
            "properties": {},
            "type": "Feature"
        }
    ],
    "type": "FeatureCollection"
}

export const E21LineString = {
    "features": [
        {
            "geometry": {
                "coordinates": [
                    [
                        -19.53603,
                        29.346456
                    ],
                    [
                        -19.253154,
                        27.697493
                    ],
                    [
                        -19.016149,
                        26.031976
                    ],
                    [
                        -18.820979,
                        24.351492
                    ],
                    [
                        -18.663839,
                        22.657508
                    ],
                    [
                        -18.541143,
                        20.951381
                    ],
                    [
                        -18.449506,
                        19.234371
                    ],
                    [
                        -18.385724,
                        17.507653
                    ],
                    [
                        -18.346757,
                        15.772327
                    ],
                    [
                        -18.329711,
                        14.029426
                    ],
                    [
                        -18.331825,
                        12.279928
                    ],
                    [
                        -18.350449,
                        10.524762
                    ],
                    [
                        -18.383034,
                        8.764814
                    ],
                    [
                        -18.427112,
                        7.000937
                    ],
                    [
                        -18.480283,
                        5.233956
                    ],
                    [
                        -18.540202,
                        3.464672
                    ],
                    [
                        -18.604565,
                        1.693872
                    ],
                    [
                        -18.671091,
                        -0.07767
                    ],
                    [
                        -18.737516,
                        -1.849183
                    ],
                    [
                        -18.801571,
                        -3.619897
                    ],
                    [
                        -18.860976,
                        -5.389035
                    ],
                    [
                        -18.913423,
                        -7.155811
                    ],
                    [
                        -18.956562,
                        -8.91942
                    ],
                    [
                        -18.987987,
                        -10.679035
                    ],
                    [
                        -19.005226,
                        -12.433802
                    ],
                    [
                        -19.005717,
                        -14.18283
                    ],
                    [
                        -18.986804,
                        -15.925185
                    ],
                    [
                        -18.945712,
                        -17.659886
                    ],
                    [
                        -18.879536,
                        -19.385893
                    ],
                    [
                        -18.78522,
                        -21.102099
                    ],
                    [
                        -18.659545,
                        -22.807321
                    ],
                    [
                        -18.499107,
                        -24.500292
                    ],
                    [
                        -18.3003,
                        -26.179644
                    ],
                    [
                        -18.0593,
                        -27.8439
                    ],
                    [
                        -17.772046,
                        -29.491459
                    ],
                    [
                        -17.434228,
                        -31.12058
                    ],
                    [
                        -17.04127,
                        -32.729366
                    ],
                    [
                        -16.588324,
                        -34.315746
                    ],
                    [
                        -16.070265,
                        -35.877456
                    ],
                    [
                        -15.481693,
                        -37.412018
                    ],
                    [
                        -14.81695,
                        -38.916721
                    ],
                    [
                        -14.070147,
                        -40.388593
                    ],
                    [
                        -13.235206,
                        -41.824385
                    ],
                    [
                        -12.305935,
                        -43.220548
                    ],
                    [
                        -11.276122,
                        -44.573212
                    ],
                    [
                        -10.139668,
                        -45.878173
                    ],
                    [
                        -8.890759,
                        -47.130883
                    ],
                    [
                        -7.524094,
                        -48.326451
                    ],
                    [
                        -6.035148,
                        -49.459653
                    ],
                    [
                        -4.4205,
                        -50.524963
                    ],
                    [
                        -2.678204,
                        -51.516599
                    ],
                    [
                        -0.808185,
                        -52.428595
                    ],
                    [
                        1.187342,
                        -53.254903
                    ],
                    [
                        3.303484,
                        -53.989517
                    ],
                    [
                        5.532347,
                        -54.62663
                    ],
                    [
                        7.862832,
                        -55.160812
                    ],
                    [
                        10.280604,
                        -55.587202
                    ],
                    [
                        12.768272,
                        -55.901703
                    ],
                    [
                        15.305808,
                        -56.101158
                    ],
                    [
                        17.8712,
                        -56.183505
                    ],
                    [
                        20.441286,
                        -56.147875
                    ],
                    [
                        22.992708,
                        -55.994639
                    ],
                    [
                        25.502883,
                        -55.725386
                    ],
                    [
                        27.950901,
                        -55.342846
                    ],
                    [
                        30.318252,
                        -54.850756
                    ],
                    [
                        32.589343,
                        -54.253691
                    ],
                    [
                        34.751773,
                        -53.556874
                    ],
                    [
                        36.796382,
                        -52.765981
                    ],
                    [
                        38.717109,
                        -51.886953
                    ],
                    [
                        40.510712,
                        -50.925839
                    ],
                    [
                        42.176398,
                        -49.888649
                    ],
                    [
                        43.715416,
                        -48.781246
                    ],
                    [
                        45.130642,
                        -47.609266
                    ],
                    [
                        46.426202,
                        -46.378057
                    ],
                    [
                        47.607123,
                        -45.092644
                    ],
                    [
                        48.679042,
                        -43.757715
                    ],
                    [
                        49.647968,
                        -42.37761
                    ],
                    [
                        50.520086,
                        -40.956332
                    ],
                    [
                        51.301611,
                        -39.497555
                    ],
                    [
                        51.998677,
                        -38.00465
                    ],
                    [
                        52.617255,
                        -36.480694
                    ],
                    [
                        53.163101,
                        -34.928504
                    ],
                    [
                        53.64172,
                        -33.350648
                    ],
                    [
                        54.05835,
                        -31.749475
                    ],
                    [
                        54.417951,
                        -30.127133
                    ],
                    [
                        54.725206,
                        -28.485588
                    ],
                    [
                        54.984533,
                        -26.826641
                    ],
                    [
                        55.20009,
                        -25.151951
                    ],
                    [
                        55.375796,
                        -23.463045
                    ],
                    [
                        55.515344,
                        -21.761334
                    ],
                    [
                        55.622216,
                        -20.048127
                    ],
                    [
                        55.699705,
                        -18.324641
                    ],
                    [
                        55.750933,
                        -16.592014
                    ],
                    [
                        55.778864,
                        -14.851315
                    ],
                    [
                        55.786324,
                        -13.103549
                    ],
                    [
                        55.776018,
                        -11.349672
                    ],
                    [
                        55.750544,
                        -9.590592
                    ],
                    [
                        55.712413,
                        -7.827181
                    ],
                    [
                        55.664055,
                        -6.06028
                    ],
                    [
                        55.607846,
                        -4.290703
                    ],
                    [
                        55.54611,
                        -2.519246
                    ],
                    [
                        55.481142,
                        -0.746694
                    ],
                    [
                        55.415214,
                        1.026179
                    ],
                    [
                        55.350597,
                        2.7986
                    ],
                    [
                        55.289565,
                        4.569793
                    ],
                    [
                        55.234417,
                        6.338974
                    ],
                    [
                        55.187485,
                        8.105342
                    ],
                    [
                        55.151149,
                        9.868081
                    ],
                    [
                        55.127855,
                        11.626345
                    ],
                    [
                        55.120123,
                        13.379257
                    ],
                    [
                        55.130567,
                        15.125902
                    ],
                    [
                        55.16191,
                        16.865318
                    ],
                    [
                        55.216998,
                        18.59649
                    ],
                    [
                        55.298818,
                        20.31834
                    ],
                    [
                        55.410516,
                        22.029719
                    ],
                    [
                        55.555412,
                        23.729395
                    ],
                    [
                        55.737021,
                        25.416046
                    ],
                    [
                        55.959069,
                        27.088244
                    ],
                    [
                        56.225508,
                        28.744443
                    ],
                    [
                        56.540537,
                        30.382964
                    ],
                    [
                        56.908611,
                        32.001981
                    ],
                    [
                        57.334457,
                        33.599502
                    ],
                    [
                        57.823075,
                        35.173351
                    ],
                    [
                        58.379743,
                        36.721148
                    ],
                    [
                        59.010006,
                        38.240286
                    ],
                    [
                        59.719654,
                        39.727912
                    ],
                    [
                        60.514685,
                        41.180906
                    ],
                    [
                        61.401249,
                        42.595853
                    ],
                    [
                        62.385561,
                        43.96903
                    ],
                    [
                        63.473788,
                        45.296384
                    ],
                    [
                        64.671892,
                        46.573523
                    ],
                    [
                        65.985431,
                        47.79571
                    ],
                    [
                        67.419309,
                        48.95787
                    ],
                    [
                        68.977479,
                        50.054609
                    ],
                    [
                        70.662591,
                        51.080255
                    ],
                    [
                        72.475603,
                        52.028919
                    ],
                    [
                        74.41537,
                        52.894579
                    ],
                    [
                        76.478236,
                        53.671197
                    ],
                    [
                        78.65768,
                        54.352865
                    ],
                    [
                        80.944051,
                        54.933965
                    ],
                    [
                        83.324451,
                        55.409366
                    ],
                    [
                        85.78282,
                        55.774611
                    ],
                    [
                        88.300247,
                        56.02611
                    ],
                    [
                        90.85552,
                        56.161304
                    ],
                    [
                        93.425886,
                        56.178786
                    ],
                    [
                        95.987964,
                        56.078377
                    ],
                    [
                        98.518719,
                        55.861134
                    ],
                    [
                        100.996402,
                        55.529293
                    ],
                    [
                        103.40136,
                        55.086164
                    ],
                    [
                        105.716658,
                        54.535972
                    ],
                    [
                        107.928455,
                        53.883675
                    ],
                    [
                        110.026154,
                        53.13477
                    ],
                    [
                        112.002339,
                        52.295103
                    ],
                    [
                        113.852551,
                        51.370692
                    ],
                    [
                        115.574952,
                        50.367578
                    ],
                    [
                        117.169927,
                        49.291702
                    ],
                    [
                        118.639673,
                        48.148807
                    ],
                    [
                        119.987799,
                        46.944373
                    ],
                    [
                        121.218965,
                        45.683574
                    ],
                    [
                        122.338565,
                        44.371245
                    ],
                    [
                        123.352465,
                        43.01188
                    ],
                    [
                        124.26679,
                        41.60963
                    ],
                    [
                        125.087754,
                        40.168312
                    ],
                    [
                        125.821534,
                        38.691428
                    ],
                    [
                        126.474182,
                        37.182182
                    ],
                    [
                        127.05155,
                        35.643503
                    ],
                    [
                        127.559259,
                        34.078064
                    ],
                    [
                        128.002664,
                        32.488308
                    ],
                    [
                        128.386847,
                        30.876468
                    ],
                    [
                        128.716613,
                        29.244586
                    ],
                    [
                        128.996495,
                        27.594534
                    ],
                    [
                        129.230764,
                        25.92803
                    ],
                    [
                        129.423443,
                        24.246654
                    ],
                    [
                        129.57832,
                        22.551866
                    ],
                    [
                        129.698968,
                        20.845017
                    ],
                    [
                        129.788763,
                        19.12736
                    ],
                    [
                        129.850896,
                        17.400066
                    ],
                    [
                        129.888399,
                        15.664229
                    ],
                    [
                        129.904156,
                        13.920881
                    ],
                    [
                        129.900921,
                        12.170995
                    ],
                    [
                        129.881337,
                        10.415497
                    ],
                    [
                        129.847949,
                        8.655272
                    ],
                    [
                        129.803218,
                        6.89117
                    ],
                    [
                        129.749541,
                        5.124014
                    ],
                    [
                        129.689261,
                        3.354604
                    ],
                    [
                        129.62468,
                        1.583727
                    ],
                    [
                        129.558076,
                        -0.187844
                    ],
                    [
                        129.491715,
                        -1.959338
                    ],
                    [
                        129.427864,
                        -3.729985
                    ],
                    [
                        129.368806,
                        -5.499008
                    ],
                    [
                        129.316851,
                        -7.265619
                    ],
                    [
                        129.274351,
                        -9.029012
                    ],
                    [
                        129.243717,
                        -10.788361
                    ],
                    [
                        129.227426,
                        -12.542806
                    ],
                    [
                        129.228044,
                        -14.291455
                    ],
                    [
                        129.248236,
                        -16.033373
                    ],
                    [
                        129.290783,
                        -17.767574
                    ],
                    [
                        129.3586,
                        -19.493013
                    ],
                    [
                        129.454752,
                        -21.208581
                    ],
                    [
                        129.582468,
                        -22.91309
                    ],
                    [
                        129.745166,
                        -24.605264
                    ],
                    [
                        129.946464,
                        -26.283733
                    ],
                    [
                        130.190201,
                        -27.94701
                    ],
                    [
                        130.480451,
                        -29.593486
                    ],
                    [
                        130.821543,
                        -31.221411
                    ],
                    [
                        131.218068,
                        -32.828878
                    ],
                    [
                        131.674892,
                        -34.413805
                    ],
                    [
                        132.197158,
                        -35.973914
                    ],
                    [
                        132.790281,
                        -37.506715
                    ],
                    [
                        133.459935,
                        -39.00948
                    ],
                    [
                        134.212024,
                        -40.47922
                    ],
                    [
                        135.052634,
                        -41.91267
                    ],
                    [
                        135.987961,
                        -43.30626
                    ],
                    [
                        137.024217,
                        -44.6561
                    ],
                    [
                        138.167489,
                        -45.957965
                    ],
                    [
                        139.423563,
                        -47.207286
                    ],
                    [
                        140.797704,
                        -48.399149
                    ],
                    [
                        142.294378,
                        -49.528311
                    ],
                    [
                        143.916924,
                        -50.589229
                    ],
                    [
                        145.667187,
                        -51.576106
                    ],
                    [
                        147.545111,
                        -52.482969
                    ],
                    [
                        149.548325,
                        -53.303767
                    ],
                    [
                        151.671759,
                        -54.032501
                    ],
                    [
                        153.907325,
                        -54.663384
                    ],
                    [
                        156.24372,
                        -55.191014
                    ],
                    [
                        158.666412,
                        -55.610572
                    ],
                    [
                        161.157829,
                        -55.918013
                    ],
                    [
                        163.697801,
                        -56.110246
                    ],
                    [
                        166.264215,
                        -56.185279
                    ],
                    [
                        168.833868,
                        -56.142319
                    ],
                    [
                        171.38342,
                        -55.981815
                    ],
                    [
                        173.890368,
                        -55.70543
                    ],
                    [
                        176.33393,
                        -55.315961
                    ],
                    [
                        178.695763,
                        -54.817202
                    ],
                    [
                        -179.039533,
                        -54.213773
                    ],
                    [
                        -176.884158,
                        -53.510933
                    ],
                    [
                        -174.847074,
                        -52.714378
                    ],
                    [
                        -172.934156,
                        -51.830063
                    ],
                    [
                        -171.148483,
                        -50.864037
                    ],
                    [
                        -169.490708,
                        -49.822303
                    ],
                    [
                        -167.959471,
                        -48.710714
                    ],
                    [
                        -166.551805,
                        -47.534888
                    ],
                    [
                        -165.263519,
                        -46.300156
                    ],
                    [
                        -164.089541,
                        -45.011521
                    ],
                    [
                        -163.024201,
                        -43.67365
                    ],
                    [
                        -162.061477,
                        -42.290861
                    ],
                    [
                        -161.195175,
                        -40.867137
                    ],
                    [
                        -160.419083,
                        -39.406133
                    ],
                    [
                        -159.727076,
                        -37.911199
                    ],
                    [
                        -159.113193,
                        -36.385399
                    ],
                    [
                        -158.571694,
                        -34.83153
                    ],
                    [
                        -158.097088,
                        -33.252148
                    ],
                    [
                        -157.684157,
                        -31.649589
                    ],
                    [
                        -157.327956,
                        -30.025988
                    ],
                    [
                        -157.023819,
                        -28.3833
                    ],
                    [
                        -156.767346,
                        -26.723318
                    ],
                    [
                        -156.554391,
                        -25.047692
                    ],
                    [
                        -156.381052,
                        -23.357941
                    ],
                    [
                        -156.24365,
                        -21.655469
                    ],
                    [
                        -156.138714,
                        -19.94158
                    ],
                    [
                        -156.062961,
                        -18.217484
                    ],
                    [
                        -156.013281,
                        -16.484316
                    ],
                    [
                        -155.98672,
                        -14.74314
                    ],
                    [
                        -155.980458,
                        -12.994959
                    ],
                    [
                        -155.991797,
                        -11.240723
                    ],
                    [
                        -156.018146,
                        -9.481341
                    ],
                    [
                        -156.057,
                        -7.71768
                    ],
                    [
                        -156.105931,
                        -5.95058
                    ],
                    [
                        -156.162568,
                        -4.180855
                    ],
                    [
                        -156.224589,
                        -2.409299
                    ],
                    [
                        -156.2897,
                        -0.636695
                    ],
                    [
                        -156.35563,
                        1.136181
                    ],
                    [
                        -156.420109,
                        2.908557
                    ],
                    [
                        -156.48086,
                        4.679657
                    ],
                    [
                        -156.535584,
                        6.448696
                    ],
                    [
                        -156.581947,
                        8.214872
                    ],
                    [
                        -156.617562,
                        9.977367
                    ],
                    [
                        -156.639983,
                        11.735334
                    ],
                    [
                        -156.646682,
                        13.487893
                    ],
                    [
                        -156.635039,
                        15.234128
                    ],
                    [
                        -156.602325,
                        16.973073
                    ],
                    [
                        -156.545685,
                        18.703708
                    ],
                    [
                        -156.462123,
                        20.424953
                    ],
                    [
                        -156.348482,
                        22.135652
                    ],
                    [
                        -156.20143,
                        23.834571
                    ],
                    [
                        -156.01744,
                        25.520379
                    ],
                    [
                        -155.792774,
                        27.191641
                    ],
                    [
                        -155.523462,
                        28.846805
                    ],
                    [
                        -155.205293,
                        30.484182
                    ],
                    [
                        -154.833792,
                        32.101938
                    ],
                    [
                        -154.404218,
                        33.698068
                    ],
                    [
                        -153.911551,
                        35.270386
                    ],
                    [
                        -153.350497,
                        36.816496
                    ],
                    [
                        -152.715496,
                        38.333778
                    ],
                    [
                        -152.000742,
                        39.819364
                    ],
                    [
                        -151.200226,
                        41.270115
                    ],
                    [
                        -150.307792,
                        42.682597
                    ],
                    [
                        -149.317222,
                        44.053069
                    ],
                    [
                        -148.222357,
                        45.377455
                    ],
                    [
                        -147.017255,
                        46.651343
                    ],
                    [
                        -145.696389,
                        47.869974
                    ],
                    [
                        -144.254905,
                        49.028252
                    ],
                    [
                        -142.688918,
                        50.120765
                    ],
                    [
                        -140.995873,
                        51.141826
                    ],
                    [
                        -139.174929,
                        52.085533
                    ],
                    [
                        -137.227376,
                        52.94586
                    ],
                    [
                        -135.157035,
                        53.716774
                    ],
                    [
                        -132.970617,
                        54.392377
                    ],
                    [
                        -130.677973,
                        54.967078
                    ],
                    [
                        -128.292201,
                        55.435779
                    ],
                    [
                        -125.82955,
                        55.794074
                    ],
                    [
                        -123.309093,
                        56.038431
                    ],
                    [
                        -120.752163,
                        56.166358
                    ],
                    [
                        -118.18158,
                        56.176525
                    ],
                    [
                        -115.620733,
                        56.068828
                    ],
                    [
                        -113.092606,
                        55.8444
                    ],
                    [
                        -110.618842,
                        55.505548
                    ],
                    [
                        -108.218938,
                        55.055643
                    ],
                    [
                        -105.90965,
                        54.498962
                    ],
                    [
                        -103.704619,
                        53.840501
                    ],
                    [
                        -101.614242,
                        53.085786
                    ],
                    [
                        -99.645743,
                        52.240677
                    ],
                    [
                        -97.803407,
                        51.311199
                    ],
                    [
                        -96.088924,
                        50.30339
                    ],
                    [
                        -94.501783,
                        49.223181
                    ],
                    [
                        -93.039689,
                        48.076301
                    ],
                    [
                        -91.698956,
                        46.868213
                    ],
                    [
                        -90.47487,
                        45.604068
                    ],
                    [
                        -89.362,
                        44.288682
                    ],
                    [
                        -88.354458,
                        42.926529
                    ],
                    [
                        -87.446109,
                        41.521736
                    ],
                    [
                        -86.630738,
                        40.078102
                    ],
                    [
                        -85.902172,
                        38.599109
                    ],
                    [
                        -85.254371,
                        37.087944
                    ],
                    [
                        -84.681494,
                        35.547518
                    ],
                    [
                        -84.177938,
                        33.980492
                    ],
                    [
                        -83.738363,
                        32.389293
                    ],
                    [
                        -83.357705,
                        30.776142
                    ],
                    [
                        -83.031175,
                        29.143071
                    ],
                    [
                        -82.754257,
                        27.49194
                    ],
                    [
                        -82.522696,
                        25.824459
                    ],
                    [
                        -82.332484,
                        24.142202
                    ],
                    [
                        -82.179847,
                        22.446618
                    ],
                    [
                        -82.061223,
                        20.739054
                    ],
                    [
                        -81.973251,
                        19.020757
                    ],
                    [
                        -81.912747,
                        17.292894
                    ],
                    [
                        -81.876691,
                        15.556553
                    ],
                    [
                        -81.862207,
                        13.812764
                    ],
                    [
                        -81.866547,
                        12.062495
                    ],
                    [
                        -81.887076,
                        10.30667
                    ],
                    [
                        -81.921256,
                        8.546172
                    ],
                    [
                        -81.966626,
                        6.781849
                    ],
                    [
                        -82.020797,
                        5.014521
                    ],
                    [
                        -82.081428,
                        3.24499
                    ],
                    [
                        -82.146217,
                        1.474039
                    ],
                    [
                        -82.212889,
                        -0.297558
                    ],
                    [
                        -82.279178,
                        -2.06903
                    ],
                    [
                        -82.342816,
                        -3.839607
                    ],
                    [
                        -82.401519,
                        -5.608512
                    ],
                    [
                        -82.452974,
                        -7.374955
                    ],
                    [
                        -82.494827,
                        -9.138131
                    ],
                    [
                        -82.524663,
                        -10.897209
                    ],
                    [
                        -82.539999,
                        -12.65133
                    ],
                    [
                        -82.538265,
                        -14.399599
                    ],
                    [
                        -82.516789,
                        -16.141077
                    ],
                    [
                        -82.472781,
                        -17.874775
                    ],
                    [
                        -82.403317,
                        -19.599645
                    ],
                    [
                        -82.305325,
                        -21.314573
                    ],
                    [
                        -82.175561,
                        -23.018365
                    ],
                    [
                        -82.010598,
                        -24.709742
                    ],
                    [
                        -81.806804,
                        -26.387324
                    ],
                    [
                        -81.560326,
                        -28.049619
                    ],
                    [
                        -81.267073,
                        -29.69501
                    ],
                    [
                        -80.922702,
                        -31.321737
                    ],
                    [
                        -80.522605,
                        -32.927882
                    ],
                    [
                        -80.061899,
                        -34.511352
                    ],
                    [
                        -79.535423,
                        -36.069858
                    ],
                    [
                        -78.937745,
                        -37.600893
                    ],
                    [
                        -78.263176,
                        -39.101715
                    ],
                    [
                        -77.505799,
                        -40.569321
                    ],
                    [
                        -76.659519,
                        -42.000424
                    ],
                    [
                        -75.718135,
                        -43.391436
                    ],
                    [
                        -74.675439,
                        -44.738447
                    ],
                    [
                        -73.525356,
                        -46.03721
                    ],
                    [
                        -72.262124,
                        -47.283135
                    ],
                    [
                        -70.880521,
                        -48.471288
                    ],
                    [
                        -69.376138,
                        -49.596405
                    ],
                    [
                        -67.745717,
                        -50.652926
                    ],
                    [
                        -65.98752,
                        -51.635041
                    ],
                    [
                        -64.101733,
                        -52.536767
                    ],
                    [
                        -62.090883,
                        -53.352054
                    ],
                    [
                        -59.960218,
                        -54.07491
                    ],
                    [
                        -57.718023,
                        -54.699567
                    ],
                    [
                        -55.375799,
                        -55.220652
                    ],
                    [
                        -52.948277,
                        -55.63339
                    ],
                    [
                        -50.453203,
                        -55.933788
                    ],
                    [
                        -47.910893,
                        -56.11882
                    ],
                    [
                        -45.343553,
                        -56.186565
                    ],
                    [
                        -42.774424,
                        -56.136308
                    ],
                    [
                        -40.226822,
                        -55.968573
                    ],
                    [
                        -37.723171,
                        -55.685096
                    ],
                    [
                        -35.28412,
                        -55.28874
                    ],
                    [
                        -32.927844,
                        -54.783356
                    ],
                    [
                        -30.66955,
                        -54.173612
                    ],
                    [
                        -28.521237,
                        -53.464795
                    ],
                    [
                        -26.49167,
                        -52.662626
                    ],
                    [
                        -24.586542,
                        -51.773069
                    ],
                    [
                        -22.80877,
                        -50.802174
                    ],
                    [
                        -21.15887,
                        -49.755938
                    ],
                    [
                        -19.635371,
                        -48.640203
                    ],
                    [
                        -18.235218,
                        -47.460569
                    ],
                    [
                        -16.954157,
                        -46.222347
                    ],
                    [
                        -15.787071,
                        -44.930522
                    ],
                    [
                        -14.728261,
                        -43.589738
                    ],
                    [
                        -13.771687,
                        -42.204293
                    ],
                    [
                        -12.911153,
                        -40.778147
                    ],
                    [
                        -12.140449,
                        -39.314938
                    ],
                    [
                        -11.453455,
                        -37.817998
                    ],
                    [
                        -10.844226,
                        -36.290371
                    ],
                    [
                        -10.307033,
                        -34.734842
                    ],
                    [
                        -9.836404,
                        -33.15395
                    ],
                    [
                        -9.427136,
                        -31.550019
                    ],
                    [
                        -9.074302,
                        -29.925172
                    ],
                    [
                        -8.773253,
                        -28.281354
                    ],
                    [
                        -8.519603,
                        -26.620349
                    ],
                    [
                        -8.309225,
                        -24.943797
                    ],
                    [
                        -8.138228,
                        -23.25321
                    ],
                    [
                        -8.002948,
                        -21.549986
                    ],
                    [
                        -7.899925,
                        -19.835422
                    ],
                    [
                        -7.825889,
                        -18.110724
                    ],
                    [
                        -7.777739,
                        -16.377023
                    ],
                    [
                        -7.752529,
                        -14.635376
                    ],
                    [
                        -7.747448,
                        -12.886785
                    ],
                    [
                        -7.759806,
                        -11.132197
                    ],
                    [
                        -7.787015,
                        -9.372517
                    ],
                    [
                        -7.826578,
                        -7.608611
                    ],
                    [
                        -7.876069,
                        -5.841318
                    ],
                    [
                        -7.933122,
                        -4.071448
                    ],
                    [
                        -7.995416,
                        -2.299797
                    ],
                    [
                        -8.06066,
                        -0.527146
                    ],
                    [
                        -8.126582,
                        1.24573
                    ],
                    [
                        -8.190912,
                        3.018058
                    ],
                    [
                        -8.251374,
                        4.789062
                    ],
                    [
                        -8.305665,
                        6.557954
                    ],
                    [
                        -8.351449,
                        8.323936
                    ],
                    [
                        -8.386337,
                        10.086184
                    ],
                    [
                        -8.407877,
                        11.84385
                    ],
                    [
                        -8.413535,
                        13.596055
                    ],
                    [
                        -8.400687,
                        15.341876
                    ],
                    [
                        -8.366594,
                        17.080346
                    ],
                    [
                        -8.308395,
                        18.810442
                    ],
                    [
                        -8.223083,
                        20.531079
                    ],
                    [
                        -8.107492,
                        22.241096
                    ],
                    [
                        -7.958278,
                        23.939254
                    ],
                    [
                        -7.771902,
                        25.624215
                    ],
                    [
                        -7.544611,
                        27.294539
                    ],
                    [
                        -7.272421,
                        28.948665
                    ],
                    [
                        -6.951104,
                        30.584895
                    ],
                    [
                        -6.576171,
                        32.201386
                    ],
                    [
                        -6.142862,
                        33.796122
                    ],
                    [
                        -5.646141,
                        35.366903
                    ],
                    [
                        -5.080697,
                        36.911322
                    ],
                    [
                        -4.440952,
                        38.426744
                    ],
                    [
                        -3.721089,
                        39.910285
                    ],
                    [
                        -2.915085,
                        41.358787
                    ],
                    [
                        -2.016779,
                        42.768799
                    ],
                    [
                        -1.019951,
                        44.136559
                    ],
                    [
                        0.081548,
                        45.457971
                    ],
                    [
                        1.293642,
                        46.728601
                    ],
                    [
                        2.621824,
                        47.943669
                    ],
                    [
                        4.0709,
                        49.098058
                    ],
                    [
                        5.644681,
                        50.186339
                    ],
                    [
                        7.34563,
                        51.202809
                    ],
                    [
                        9.174469,
                        52.141555
                    ],
                    [
                        11.129762,
                        52.996547
                    ],
                    [
                        13.207519,
                        53.761755
                    ],
                    [
                        15.400843,
                        54.431295
                    ],
                    [
                        17.699683,
                        54.999601
                    ],
                    [
                        20.09074,
                        55.461612
                    ],
                    [
                        22.557579,
                        55.812969
                    ],
                    [
                        25.080967,
                        56.050202
                    ],
                    [
                        27.639456,
                        56.170886
                    ],
                    [
                        30.21016,
                        56.173766
                    ],
                    [
                        32.769687,
                        56.058815
                    ],
                    [
                        35.295108,
                        55.82724
                    ],
                    [
                        37.764892,
                        55.481418
                    ],
                    [
                        40.159691,
                        55.024781
                    ],
                    [
                        42.462937,
                        54.461656
                    ],
                    [
                        44.661185,
                        53.797079
                    ],
                    [
                        46.744239,
                        53.0366
                    ],
                    [
                        48.705065,
                        52.186096
                    ],
                    [
                        50.539546,
                        51.251596
                    ],
                    [
                        52.246144,
                        50.239134
                    ],
                    [
                        53.825489,
                        49.154633
                    ],
                    [
                        55.279976,
                        48.003806
                    ],
                    [
                        56.613363,
                        46.792099
                    ],
                    [
                        57.830418,
                        45.524642
                    ],
                    [
                        58.936608,
                        44.206231
                    ],
                    [
                        59.937842,
                        42.841316
                    ],
                    [
                        60.840263,
                        41.434007
                    ],
                    [
                        61.650089,
                        39.988081
                    ],
                    [
                        62.373486,
                        38.507001
                    ],
                    [
                        63.016484,
                        36.993937
                    ],
                    [
                        63.58491,
                        35.451785
                    ],
                    [
                        64.084352,
                        33.883187
                    ],
                    [
                        64.520133,
                        32.290561
                    ],
                    [
                        64.897301,
                        30.676114
                    ],
                    [
                        65.220627,
                        29.041866
                    ],
                    [
                        65.49461,
                        27.389669
                    ],
                    [
                        65.723491,
                        25.721223
                    ],
                    [
                        65.911262,
                        24.038093
                    ],
                    [
                        66.061685,
                        22.341724
                    ],
                    [
                        66.178307,
                        20.633454
                    ],
                    [
                        66.264479,
                        18.914526
                    ],
                    [
                        66.323374,
                        17.1861
                    ],
                    [
                        66.358002,
                        15.449263
                    ],
                    [
                        66.371231,
                        13.705038
                    ],
                    [
                        66.365802,
                        11.954393
                    ],
                    [
                        66.344343,
                        10.198247
                    ],
                    [
                        66.309388,
                        8.437482
                    ],
                    [
                        66.263391,
                        6.672942
                    ],
                    [
                        66.208739,
                        4.905449
                    ],
                    [
                        66.147771,
                        3.135801
                    ],
                    [
                        66.082785,
                        1.36478
                    ],
                    [
                        66.016056,
                        -0.406838
                    ],
                    [
                        65.949851,
                        -2.178284
                    ],
                    [
                        65.886437,
                        -3.948787
                    ],
                    [
                        65.828099,
                        -5.71757
                    ],
                    [
                        65.777152,
                        -7.483842
                    ],
                    [
                        65.735956,
                        -9.246796
                    ],
                    [
                        65.706926,
                        -11.005601
                    ],
                    [
                        65.692553,
                        -12.759395
                    ],
                    [
                        65.695411,
                        -14.507279
                    ],
                    [
                        65.718181,
                        -16.248314
                    ],
                    [
                        65.763658,
                        -17.981506
                    ],
                    [
                        65.834776,
                        -19.705803
                    ],
                    [
                        65.934617,
                        -21.420087
                    ],
                    [
                        66.066436,
                        -23.12316
                    ],
                    [
                        66.233671,
                        -24.813735
                    ],
                    [
                        66.439969,
                        -26.490427
                    ],
                    [
                        66.689197,
                        -28.151737
                    ],
                    [
                        66.985459,
                        -29.796037
                    ],
                    [
                        67.333115,
                        -31.421561
                    ],
                    [
                        67.736792,
                        -33.02638
                    ],
                    [
                        68.201388,
                        -34.608388
                    ],
                    [
                        68.732082,
                        -36.165285
                    ],
                    [
                        69.334321,
                        -37.694549
                    ],
                    [
                        70.013811,
                        -39.193424
                    ],
                    [
                        70.77648,
                        -40.658887
                    ],
                    [
                        71.628433,
                        -42.087636
                    ],
                    [
                        72.575876,
                        -43.476063
                    ],
                    [
                        73.625013,
                        -44.820238
                    ],
                    [
                        74.781903,
                        -46.115891
                    ],
                    [
                        76.052285,
                        -47.358413
                    ],
                    [
                        77.44134,
                        -48.542847
                    ],
                    [
                        78.953414,
                        -49.663911
                    ],
                    [
                        80.591684,
                        -50.716027
                    ],
                    [
                        82.357783,
                        -51.693373
                    ],
                    [
                        84.251391,
                        -52.589957
                    ],
                    [
                        86.269825,
                        -53.399729
                    ],
                    [
                        88.407657,
                        -54.116706
                    ],
                    [
                        90.65641,
                        -54.735138
                    ],
                    [
                        93.004378,
                        -55.249684
                    ],
                    [
                        95.436638,
                        -55.65561
                    ],
                    [
                        97.935269,
                        -55.94898
                    ],
                    [
                        100.479816,
                        -56.12683
                    ],
                    [
                        103.047982,
                        -56.187313
                    ],
                    [
                        105.616493,
                        -56.129788
                    ],
                    [
                        108.162058,
                        -55.954855
                    ],
                    [
                        110.662339,
                        -55.664325
                    ],
                    [
                        113.096819,
                        -55.261125
                    ],
                    [
                        115.447496,
                        -54.749162
                    ],
                    [
                        117.699353,
                        -54.133146
                    ],
                    [
                        119.840592,
                        -53.4184
                    ],
                    [
                        121.862645,
                        -52.610662
                    ],
                    [
                        123.759999,
                        -51.715909
                    ]
                ],
                "type": "LineString"
            },
            "properties": {},
            "type": "Feature"
        }
    ],
    "type": "FeatureCollection"
}

export const IGSStations = {
    "features": [
        {
            "geometry": {
                "coordinates": [
                    -61.527534,
                    16.262299
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "ABMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    47.229212,
                    -19.018306
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945G_M",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "ABPO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -0.207112,
                    5.641471
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAV_RINGANT_G3T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TR_G3TH",
                "station": "ACRG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    38.766302,
                    9.035134
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM29659.00",
                "clock": "INTERNAL ",
                "receiver": "JPS LEGACY",
                "station": "ADIS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -58.139855,
                    -34.873708
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "EXTERNAL CESIUM 1",
                "receiver": "LEICA GRX1200+GNSS",
                "station": "AGGO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    130.599593,
                    31.824061
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL CESIUM",
                "receiver": "TRIMBLE NETR9",
                "station": "AIRA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    8.762608,
                    41.927451
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "AJAC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -123.48747,
                    48.389782
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5",
                "station": "ALBH"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -78.071368,
                    45.9558
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5",
                "station": "ALGO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    133.885513,
                    -23.670124
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "ALIC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -62.34046,
                    82.494294
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945D_M",
                "clock": "INTERNAL",
                "receiver": "ASHTECH UZ-12",
                "station": "ALRT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -104.524596,
                    38.803124
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5C",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "AMC4"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    32.758579,
                    39.887512
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR10",
                "clock": "INTERNAL",
                "receiver": "LEICA GR30",
                "station": "ANKR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    101.506602,
                    2.784648
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "ANMG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -71.532057,
                    -37.338706
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936D_M",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "ANTC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -71.492904,
                    -16.465423
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "SEPT POLARX5",
                "station": "AREG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -71.492797,
                    -16.465517
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "EXTERNAL XL-DC 151-358-108-2",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "AREQ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    166.663653,
                    -77.829437
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "ARHT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    58.560452,
                    56.429821
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936D_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "ARTU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    44.085586,
                    40.285714
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "ARUC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -14.332664,
                    -7.916281
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "ASCG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -170.722434,
                    -14.326095
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM55971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR5",
                "station": "ASPA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    51.953766,
                    47.130881
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR10",
                "station": "ATRU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    174.834386,
                    -36.602845
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "AUCK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    102.234981,
                    51.769706
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "EXTERNAL H-MASER CH1-80",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "BADG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -68.263327,
                    49.186826
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G5",
                "station": "BAIE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -96.002344,
                    64.31782
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "BAKE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    106.84891,
                    -6.491055
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR20",
                "clock": "EXTERNAL",
                "receiver": "LEICA GR50",
                "station": "BAKO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -125.135104,
                    48.835329
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL CLOCK STEERING",
                "receiver": "SEPT POLARX5",
                "station": "BAMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -68.22169,
                    44.395048
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR10",
                "clock": "INTERNAL",
                "receiver": "LEICA GR30",
                "station": "BARH"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -48.46255,
                    -1.408795
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "BELE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    50.608145,
                    26.209141
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR1",
                "receiver": "ITT 3750300",
                "station": "BHR3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    50.608145,
                    26.209141
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR2",
                "receiver": "ITT 3750300",
                "station": "BHR4"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    74.533179,
                    42.854193
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAV_RINGANT_G3T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "BIK0"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -117.064599,
                    33.578243
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.99",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "BILL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    2.450021,
                    6.384664
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR5",
                "station": "BJCO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    115.892482,
                    39.608602
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59900.00",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "TRIMBLE NETR9",
                "station": "BJFS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    116.224128,
                    40.245325
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "NOV702GG",
                "clock": "EXTERNAL HYDROGEN MASER",
                "receiver": "SEPT POLARX3ETR",
                "station": "BJNM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -114.714851,
                    33.610415
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945B_M",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETRS",
                "station": "BLYT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    115.209917,
                    -8.7465
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59900.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "BNOA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -60.701115,
                    2.845182
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "BOAV"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    21.03521,
                    52.474989
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "JAVAD TRE_G3T DELTA",
                "station": "BOGI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -74.08094,
                    4.640073
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "BOGT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    17.073458,
                    52.276956
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TRIMBLE NETR9",
                "station": "BOR1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -47.877869,
                    -15.947476
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "BRAZ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -119.682634,
                    48.131524
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "BREW"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -38.425537,
                    -3.877447
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200PRO",
                "station": "BRFT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -64.696273,
                    32.370399
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200GGPRO",
                "station": "BRMU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -4.4966,
                    48.380498
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "BRST"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    114.952364,
                    4.971179
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "BRUN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    4.358563,
                    50.798063
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "EXTERNAL CH1-75A MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "BRUX"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    35.02,
                    32.779
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "BSHM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    125.190432,
                    1.438923
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59900.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "BTNG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    26.125738,
                    44.463944
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "BUCU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -75.807327,
                    45.58502
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR8",
                "station": "CAGS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    110.519706,
                    -66.283358
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARXS",
                "station": "CAS1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    142.195028,
                    27.067532
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CCJ2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -4.367853,
                    40.453429
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "CEBR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    133.809827,
                    -31.866671
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "CEDU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    9.118312,
                    10.123095
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945B_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "CGGN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    125.443296,
                    43.790469
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "EXTERNAL H-MASER ",
                "receiver": "ASHTECH UZ-12",
                "station": "CHAN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.025996,
                    34.333422
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "CHIL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    139.531057,
                    35.674544
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "CHOF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -45.002376,
                    -22.682273
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "CHPG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -44.985159,
                    -22.687145
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "CHPI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -176.617115,
                    -43.735474
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "CHTI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    74.751099,
                    42.998501
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETRS",
                "station": "CHUM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -94.088725,
                    58.759078
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "TPS NET-G3A",
                "station": "CHUR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -122.008426,
                    49.156609
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL CLOCK STEERING",
                "receiver": "SEPT POLARX5",
                "station": "CHWK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    106.849173,
                    -6.490365
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CIBG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.127285,
                    34.136709
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CIT1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -159.80061,
                    -21.201028
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CKIS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    120.220009,
                    22.998852
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "CKSV"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.411425,
                    34.35318
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "CMP9"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    98.93238,
                    18.760877
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAV_GRANT-G3T",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CMUM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    145.743092,
                    15.229697
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM55971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CNMR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    96.833964,
                    -12.188352
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "COCO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -64.470048,
                    -31.528436
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "CORD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -117.80889,
                    35.982343
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TWIVC6150",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "COSO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    161.9978,
                    -77.8059
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "COTE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -71.892081,
                    -45.514345
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936D_M",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "COYQ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    99.374378,
                    10.724651
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CPNM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -22.934933,
                    16.732062
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CPVG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    33.990984,
                    44.41326
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "INTERNAL",
                "receiver": "ASHTECH UZ-12",
                "station": "CRAO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -117.099683,
                    34.039052
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CRFP"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -64.584319,
                    17.756899
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL ",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "CRO1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    100.533909,
                    13.735913
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "CUSV"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    115.894799,
                    -32.003889
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CUT0"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    100.533935,
                    13.735991
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CUUT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    51.855482,
                    -46.431896
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR20",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "CZTG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    127.374483,
                    36.399428
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL CESIUM",
                "receiver": "TRIMBLE NETR9",
                "station": "DAE2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    127.374476,
                    36.399429
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL CESIUM",
                "receiver": "TRIMBLE NETR9",
                "station": "DAEJ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -17.439466,
                    14.721235
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "DAKR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    131.132736,
                    -12.843711
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "DARW"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    77.972615,
                    -68.577323
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "DAV1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    23.992639,
                    -30.665207
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701941.B",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETRS",
                "station": "DEAR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    72.37024,
                    -7.269684
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "DGAR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -115.788028,
                    33.389806
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "DHLG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    42.847064,
                    11.526288
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "DJIG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    4.387458,
                    51.986018
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL CESIUM",
                "receiver": "TRIMBLE NETR9",
                "station": "DLF1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    108.481753,
                    11.945273
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "DLTV"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    35.39207,
                    31.5932
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936D_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "DRAG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -119.624981,
                    49.32262
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5",
                "station": "DRAO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -95.866179,
                    50.258809
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL RUBIDIUM SYMMETRICOM",
                "receiver": "SEPT POLARX5",
                "station": "DUBO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    140.002201,
                    -66.665171
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR25",
                "station": "DUMG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    170.597175,
                    -45.883675
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "DUND"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    23.932434,
                    38.078553
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "DYNG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    0.492349,
                    40.820885
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "EBRE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -147.113015,
                    64.687892
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR 1",
                "receiver": "ITT 3750300",
                "station": "EIL3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -147.113015,
                    64.687892
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR 2",
                "receiver": "ITT 3750300",
                "station": "EIL4"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -28.026011,
                    39.091203
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_G5T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3",
                "station": "ENAO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -66.992131,
                    44.90871
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR20",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "EPRT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -64.79871,
                    47.073404
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "ESCU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    100.494096,
                    5.14557
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "EUSM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -149.614299,
                    -17.555314
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL ",
                "receiver": "SEPT POLARX5",
                "station": "FAA1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -147.49924,
                    64.977998
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945G_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "FAIR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -171.999526,
                    -13.832218
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM41249.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETRS",
                "station": "FALE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -57.874067,
                    -51.693652
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "FALK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    8.664971,
                    50.09058
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "FFMJ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -101.978032,
                    54.725584
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "NOV750.R4",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "FLIN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -31.126389,
                    39.453832
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504GG",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200GGPRO",
                "station": "FLRS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -66.65988,
                    45.933497
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "FRDN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -178.120946,
                    -14.307803
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "FTNA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -16.907617,
                    32.647946
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM159900.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "FUNC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -134.964824,
                    -23.130355
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "GAMB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    127.919736,
                    35.590082
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5TR",
                "station": "GAMG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    20.322937,
                    49.034714
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "GANP"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -147.499431,
                    64.978058
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "GCGO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    8.921116,
                    44.4194
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR20",
                "clock": "INTERNAL",
                "receiver": "LEICA GR30",
                "station": "GENO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -90.303669,
                    -0.742999
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945B_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "GLPS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    30.496739,
                    50.364178
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "GLSV"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    131.015564,
                    30.556446
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL CESIUM",
                "receiver": "TRIMBLE NETR9",
                "station": "GMSD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -76.82683,
                    39.021728
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "GODE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -76.827094,
                    39.021179
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "EXTERNAL H2 Maser",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "GODN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -76.827323,
                    39.020518
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "EXTERNAL H2 Maser",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "GODS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -76.826829,
                    39.021727
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "JPS EGGDT",
                "station": "GODZ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -116.88925,
                    35.425156
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "ASHTECH UZ-12",
                "station": "GOL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -116.88925,
                    35.425156
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-Maser ",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "GOLD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    14.785603,
                    49.913667
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "EXTERNAL PASSIVE HYDROGEN MASER",
                "receiver": "SEPT POLARX5",
                "station": "GOP6"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    14.785602,
                    49.913666
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "EXTERNAL PASSIVE HYDROGEN MASER",
                "receiver": "TRIMBLE NETR9",
                "station": "GOP7"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    14.785622,
                    49.913705
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "EXTERNAL PASSIVE HYDROGEN MASER",
                "receiver": "TRIMBLE ALLOY",
                "station": "GOPE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    6.920761,
                    43.754486
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "LEICA GR25",
                "station": "GRAC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    6.920575,
                    43.754739
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "GRAS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    15.493476,
                    47.067127
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "GRAZ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    144.86836,
                    13.58933
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "GUAM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    87.177294,
                    43.471094
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945B_M",
                "clock": "EXTERNAL H-MASER",
                "receiver": "ASHTECH UZ-12",
                "station": "GUAO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -90.520183,
                    14.590404
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200GGPRO",
                "station": "GUAT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    144.802713,
                    13.433208
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "GUUG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.256243,
                    20.707417
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "HAL1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    48.534306,
                    34.869083
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "HAMD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    27.707246,
                    -25.886962
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX5TR",
                "station": "HARB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    0.3362,
                    50.8673
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "HERS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    0.334351,
                    50.867478
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504GG",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200GGPRO",
                "station": "HERT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    113.927981,
                    22.372005
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL ",
                "receiver": "LEICA GR50",
                "station": "HKSL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    114.335377,
                    22.434282
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "HKWS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -63.611279,
                    44.683549
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "TPS NET-G3A",
                "station": "HLFX"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -157.864542,
                    21.303283
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936D_M",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "HNLC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -76.130374,
                    38.588817
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAX1202GG",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200GGPRO",
                "station": "HNPT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    19.223062,
                    -34.424631
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701941.B",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "HNUS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    147.438732,
                    -42.804718
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5",
                "station": "HOB2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -15.197924,
                    64.267291
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "HOFN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -128.134996,
                    50.640354
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL RECEIVER CLOCK",
                "receiver": "SEPT POLARX5",
                "station": "HOLB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -117.760903,
                    70.736371
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945D_M",
                "clock": "INTERNAL",
                "receiver": "ASHTECH UZ-12",
                "station": "HOLM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.168171,
                    33.92454
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "HOLP"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    27.68518,
                    -25.890402
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL H-MASER",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "HRAG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    27.686981,
                    -25.890104
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "EXTERNAL H-MASER",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "HRAO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    7.596171,
                    47.83395
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "HUEG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    78.550867,
                    17.417256
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504GG",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200GGPRO",
                "station": "HYDE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    7.639405,
                    45.015133
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_MC",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX4TR",
                "station": "IENG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    77.570376,
                    13.021166
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "IISC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -102.284203,
                    21.856154
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR10",
                "clock": "INTERNAL",
                "receiver": "LEICA GR10",
                "station": "INEG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -133.526959,
                    68.306186
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "INVK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -68.510497,
                    63.755964
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "IQAL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -70.131718,
                    -20.273544
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936D_M",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "IQQE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    104.316179,
                    52.219021
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JPSREGANT_SD_E1",
                "clock": "EXTERNAL H-MASER",
                "receiver": "JPS LEGACY",
                "station": "IRKJ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    104.31624,
                    52.219024
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "IRKM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    104.316237,
                    52.219025
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "ROGUE SNR-8000",
                "station": "IRKT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    44.438402,
                    33.341414
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR5",
                "station": "ISBA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    140.218955,
                    36.208832
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TRIMBLE NETR9",
                "station": "ISHI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -109.34441,
                    -27.124983
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "ASHTECH UZ-12",
                "station": "ISPA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    29.019338,
                    41.104447
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR25",
                "station": "ISTA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    27.081822,
                    38.394808
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM55971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR5",
                "station": "IZMI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    18.468552,
                    -33.951433
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "JCTW"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    114.491019,
                    30.515565
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "JFNG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    105.843947,
                    21.004585
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "JNAV"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    110.372463,
                    -7.763814
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAV_RINGANT_G3T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "JOG2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    21.032341,
                    52.097832
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "JOZ2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    21.031533,
                    52.097272
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "JOZE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.173229,
                    34.204821
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "JPLM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    28.282636,
                    -25.732026
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "JPRE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    117.097187,
                    -20.981436
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "KARR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    132.153274,
                    -14.376001
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "KAT1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    70.255525,
                    -49.351466
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "KERG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    139.488121,
                    35.710342
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TRIMBLE NETRS",
                "station": "KGNI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    36.239007,
                    50.005102
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "NOV702GG",
                "clock": "INTERNAL",
                "receiver": "NOV OEMV3",
                "station": "KHAR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    21.060234,
                    67.877573
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JNSCR_C146-22-1",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "KIR0"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    21.060178,
                    67.877542
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "KIR8"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    172.922897,
                    1.354581
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "KIRI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    20.968443,
                    67.85735
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX5",
                "station": "KIRU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.885449,
                    39.134767
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL",
                "receiver": "SEPT ASTERX4",
                "station": "KIT3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    66.886738,
                    39.133386
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "KITG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    118.388577,
                    24.463822
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR3_GGD",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "KMNM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -159.66493,
                    22.126264
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945G_M",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "KOKB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -159.66493,
                    22.126264
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945G_M",
                "clock": "EXTERNAL H-MASER",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "KOKV"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    5.818225,
                    52.173356
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5E",
                "station": "KOS1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    63.608113,
                    53.224555
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR10",
                "station": "KOST"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    164.287335,
                    -20.558697
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "KOUC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -52.639747,
                    5.098468
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX5TR",
                "station": "KOUG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -52.805959,
                    5.25218
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5",
                "station": "KOUR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    70.255506,
                    -49.351543
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "KRGG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    43.093444,
                    40.588453
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM55971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR5",
                "station": "KRS1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    140.657675,
                    35.955373
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936E",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TRIMBLE NETRS",
                "station": "KSMV"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -77.735272,
                    55.290007
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T_RFI_T",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "KUJ2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    49.119246,
                    55.790783
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE ALLOY",
                "station": "KZN2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    146.993187,
                    -6.67371
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936A_M",
                "clock": "INTERNAL ",
                "receiver": "ASHTECH UZ-12",
                "station": "LAE1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    20.669933,
                    53.892399
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504GG",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200+GNSS",
                "station": "LAMA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    177.44658,
                    -17.608815
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "LAUT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.203344,
                    33.78777
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TWIVC6150",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "LBCH"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    80.955636,
                    26.912179
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL Passive Hydrogen Maser",
                "receiver": "TRIMBLE ALLOY",
                "station": "LCK3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    80.955617,
                    26.912143
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL Passive Hydrogen Maser",
                "receiver": "TRIMBLE ALLOY",
                "station": "LCK4"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    12.374102,
                    51.353982
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "LEIJ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    91.104041,
                    29.657196
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR25",
                "station": "LHAZ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -0.174838,
                    51.499789
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "CHCC220GR2",
                "clock": "INTERNAL",
                "receiver": "CHC P5E",
                "station": "LICC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -16.320718,
                    28.481666
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G2T DELTA",
                "station": "LLAG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -60.996171,
                    14.594816
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "LMMF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -17.89384,
                    28.763959
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504GG",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200GGPRO",
                "station": "LPAL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -57.9323,
                    -34.906745
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_G5T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3",
                "station": "LPGS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -1.21932,
                    46.15894
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945B_M",
                "clock": "INTERNAL",
                "receiver": "LEICA GR25",
                "station": "LROC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    12.493258,
                    41.893113
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "LEICA GR25",
                "station": "M0SE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    158.935834,
                    -54.499533
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "MAC1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -4.249659,
                    40.429162
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "ASHTECH Z-XII3T",
                "station": "MAD2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -4.249659,
                    40.429162
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "MADR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    150.770019,
                    59.575755
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936D_M",
                "clock": "INTERNAL",
                "receiver": "ASHTECH Z-XII3",
                "station": "MAG0"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    171.364524,
                    7.119147
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX4TR",
                "station": "MAJU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    40.194143,
                    -2.996055
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL ",
                "receiver": "SEPT POLARX5",
                "station": "MAL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -86.248994,
                    12.148938
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.99",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "MANA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    17.258522,
                    60.595141
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "MAR6"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    17.25844,
                    60.595052
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "MAR7"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    5.353785,
                    43.278769
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "LEICA GR25",
                "station": "MARS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -15.633277,
                    27.76374
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX5",
                "station": "MAS1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    16.704545,
                    40.649062
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR20",
                "clock": "INTERNAL",
                "receiver": "LEICA GR30",
                "station": "MAT1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    16.704457,
                    40.64913
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR20",
                "clock": "EXTERNAL H_MASER",
                "receiver": "LEICA GR30",
                "station": "MATE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    16.704653,
                    40.649028
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25",
                "clock": "INTERNAL",
                "receiver": "LEICA GR10",
                "station": "MATG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.257025,
                    20.706651
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936D_M",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETRS",
                "station": "MAUI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    62.870717,
                    -67.604767
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "MAW1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    45.258152,
                    -12.782053
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "MAYG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    30.737876,
                    -0.601469
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945B_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "MBAR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    148.14496,
                    -26.358905
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "MCHL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    153.978661,
                    24.290094
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.80",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "TRIMBLE NETR9",
                "station": "MCIL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    166.669329,
                    -77.838349
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "MCM4"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -104.014993,
                    30.680511
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "MDO1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    37.214503,
                    56.021492
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JPSREGANT_DD_E1",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TPS NETG3",
                "station": "MDVJ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    11.646813,
                    44.519956
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR20",
                "clock": "EXTERNAL H-MASER",
                "receiver": "LEICA GR10",
                "station": "MEDI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -2.951641,
                    35.28122
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR10",
                "station": "MELI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    34.255853,
                    36.566389
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR10",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "MERS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    24.394501,
                    60.217456
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "MET3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    24.384175,
                    60.241967
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "METG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    24.395316,
                    60.217471
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936C_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "METS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    25.539972,
                    -25.805016
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701941.B",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETRS",
                "station": "MFKG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -69.397927,
                    -35.777351
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "MGUE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    31.972828,
                    46.972789
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR10",
                "clock": "INTERNAL",
                "receiver": "LEICA GR10",
                "station": "MIKL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    141.132826,
                    39.13517
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL",
                "receiver": "SEPT ASTERX4",
                "station": "MIZU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -155.456345,
                    19.801357
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "MKEA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    36.569713,
                    55.114882
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JPSREGANT_SD_E1",
                "clock": "INTERNAL",
                "receiver": "JPS LEGACY",
                "station": "MOBJ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    36.569713,
                    55.114882
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JPSREGANT_SD_E1",
                "clock": "INTERNAL",
                "receiver": "JPS EGGDT",
                "station": "MOBK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    36.569523,
                    55.114878
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "INTERNAL",
                "receiver": "ASHTECH UZ-12",
                "station": "MOBN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    144.97534,
                    -37.829405
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX4TR",
                "station": "MOBS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    35.29001,
                    0.28832
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "MOIU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -116.422351,
                    32.891941
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945B_M",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "MONP"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -1.685497,
                    55.21279
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR8",
                "station": "MORP"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    172.654705,
                    -43.702736
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE ALLOY",
                "station": "MQZG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -77.37065,
                    38.4991
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5",
                "station": "MRC1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    173.740752,
                    -41.576193
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR 1",
                "receiver": "ITT 3750300",
                "station": "MRL1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    173.740752,
                    -41.576193
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR 2",
                "receiver": "ITT 3750300",
                "station": "MRL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    116.637492,
                    -26.696638
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "MRO1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    139.561385,
                    35.679515
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701073.1",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "MTKA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -56.176301,
                    -34.91359
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM / RCVR1",
                "receiver": "ITT 3750300",
                "station": "MTV1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -56.176301,
                    -34.91359
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM / RCVR2",
                "receiver": "ITT 3750300",
                "station": "MTV2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -61.688717,
                    56.536964
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945D_M",
                "clock": "INTERNAL",
                "receiver": "ASHTECH UZ-12",
                "station": "NAIN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -124.086478,
                    49.294811
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL CLOCK STEERING",
                "receiver": "SEPT POLARX5",
                "station": "NANO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    166.925551,
                    -0.551731
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX4TR",
                "station": "NAUR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    120.222586,
                    22.996659
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "NCKU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    33.396432,
                    35.14098
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "NICO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -105.262604,
                    39.995067
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "NOV702",
                "clock": "EXTERNAL H-MASER",
                "receiver": "NOV OEM4-G2",
                "station": "NIST"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -169.927067,
                    -19.076566
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "NIUM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    9.672126,
                    0.353899
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "NKLG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -91.574893,
                    41.771591
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "NLIB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    116.192715,
                    -31.048739
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "EXTERNAL SLAVED CRYSTAL",
                "receiver": "SEPT POLARX5TR",
                "station": "NNOR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    14.989808,
                    36.876109
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR20",
                "clock": "EXTERNAL H-MASER",
                "receiver": "LEICA GR30",
                "station": "NOT1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    82.909486,
                    55.030501
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JPSREGANT_SD_E1",
                "clock": "EXTERNAL H-MASER",
                "receiver": "JPS LEGACY",
                "station": "NOVM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -75.623826,
                    45.454162
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "NRC1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    88.359778,
                    69.361833
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945B_M",
                "clock": "INTERNAL",
                "receiver": "ASHTECH UZ-12",
                "station": "NRIL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    166.484883,
                    -22.22833
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "NRMD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    103.679942,
                    1.345806
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR20",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "NTUS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    83.235465,
                    54.840625
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE R7 GNSS",
                "station": "NVSK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    11.865295,
                    78.929553
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701073.1",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TRIMBLE NETR8",
                "station": "NYA1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    11.858638,
                    78.930333
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_G5T",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "NYA2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    11.865095,
                    78.929581
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_B",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TRIMBLE NETR9",
                "station": "NYAL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -0.905126,
                    51.117612
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM / RCVR 1",
                "receiver": "ITT 3750300",
                "station": "OAK1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -0.905126,
                    51.117612
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM / RCVR 2",
                "receiver": "ITT 3750300",
                "station": "OAK2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    11.277857,
                    48.084805
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAV_RINGANT_G3T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "OBE4"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -57.901343,
                    -63.321077
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "EXTERNAL H-Maser",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "OHI2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -57.901386,
                    -63.321094
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "EXTERNAL H-Maser",
                "receiver": "LEICA GR50",
                "station": "OHI3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    11.924537,
                    57.395331
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TRIMBLE NETR9",
                "station": "ONS1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    11.925513,
                    57.395296
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_B",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "ONSA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    2.334975,
                    48.835906
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "EXTERNAL UTC(OP)",
                "receiver": "SEPT POLARX4TR",
                "station": "OP71"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    2.334938,
                    48.83592
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "3S-02-TSADM",
                "clock": "EXTERNAL UTC(OP)",
                "receiver": "ASHTECH Z-XII3T",
                "station": "OPMT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    20.794048,
                    41.127311
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR30",
                "station": "ORID"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    127.033583,
                    37.082691
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR1",
                "receiver": "ITT 3750300",
                "station": "OSN3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    127.033583,
                    37.082691
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR2",
                "receiver": "ITT 3750300",
                "station": "OSN4"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    170.510933,
                    -45.869475
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL",
                "receiver": "SEPT ASTERX4",
                "station": "OUS2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -176.3688,
                    -44.024294
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "OWMG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    11.896056,
                    45.41115
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "STXSA1500",
                "clock": "INTERNAL",
                "receiver": "STONEX SC2200",
                "station": "PADO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -64.051122,
                    -64.77509
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936D_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "PALM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -70.879882,
                    -53.136954
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "PARC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    148.264613,
                    -32.998762
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "PARK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    92.712136,
                    11.63778
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL Cesium 5071A Standard performance",
                "receiver": "TRIMBLE ALLOY",
                "station": "PBRI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -25.662766,
                    37.747747
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504GG",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200GGPRO",
                "station": "PDEL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    19.281666,
                    47.789726
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR20",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "PEN2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    19.281523,
                    47.789601
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504GG",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200GGPRO",
                "station": "PENC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    115.885246,
                    -31.801972
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "PERT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    158.650134,
                    53.0233
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701933B_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "PETS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    125.131662,
                    6.064912
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "PGEN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -90.161974,
                    51.479809
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TWIVC6150",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "PICL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -108.118927,
                    34.301506
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "EXTERNAL H-MASER",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "PIE1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    121.077731,
                    14.63572
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "PIMO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -116.458161,
                    33.612156
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945B_M",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "PIN1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    147.366012,
                    -2.043231
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "PNGM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -51.119765,
                    -30.074042
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "POAL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    158.210116,
                    6.959944
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "POHN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    74.694264,
                    42.67977
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "POL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    34.542929,
                    49.602613
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR10",
                "clock": "INTERNAL",
                "receiver": "LEICA GR10",
                "station": "POLV"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    13.066091,
                    52.379297
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_G5T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3",
                "station": "POTS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -63.89632,
                    -8.709335
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "POVE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    118.740234,
                    9.772933
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "PPPC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -114.293495,
                    50.871352
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "JAVAD TRE_3N DELTA",
                "station": "PRDS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    28.224043,
                    -25.746496
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR1",
                "receiver": "ITT 3750300",
                "station": "PRE3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    28.224043,
                    -25.746496
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR2",
                "receiver": "ITT 3750300",
                "station": "PRE4"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    121.040765,
                    14.535442
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "PTAG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    10.459744,
                    52.296188
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "EXTERNAL ACTIVE H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "PTBB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    121.041265,
                    14.535402
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "PTGG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    168.315024,
                    -17.749433
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "PTVL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -46.047762,
                    60.715263
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "QAQ1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -64.033665,
                    67.559339
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "ASHTECH UZ-12",
                "station": "QIKI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -78.493608,
                    -0.215157
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR1",
                "receiver": "ITT 3750300",
                "station": "QUI3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -78.493608,
                    -0.215157
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL CESIUM /RCVR2",
                "receiver": "ITT 3750300",
                "station": "QUI4"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -120.944429,
                    39.974554
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "QUIN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -6.854289,
                    33.998104
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM29659.00",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "RABT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -25.126389,
                    36.9857
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR20",
                "clock": "EXTERNAL H-MASER",
                "receiver": "LEICA GR25",
                "station": "RAEG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    34.76314,
                    30.59776
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945B_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "RAMO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    32.078385,
                    -28.795546
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "RBAY"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    36.893475,
                    -1.220829
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504GG",
                "clock": "EXTERNAL (INTERNAL OR EXTERNAL H-MASER/CESIUM/ETC)",
                "receiver": "LEICA GRX1200GGPRO",
                "station": "RCMN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -69.9113,
                    18.461398
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "RDSD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    5.14488,
                    50.001501
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX5",
                "station": "REDU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -94.893336,
                    74.690826
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936A_M",
                "clock": "INTERNAL",
                "receiver": "ASHTECH UZ-12",
                "station": "RESO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.571719,
                    -21.208226
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM55971.00",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "REUN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -21.955484,
                    64.138782
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "REYK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -67.751528,
                    -53.785839
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "RGDG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    24.058771,
                    56.948619
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR25",
                "station": "RIGA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -67.751118,
                    -53.785472
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL",
                "receiver": "SEPT ASTERX4",
                "station": "RIO2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -78.6511,
                    -1.6506
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM41249.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETRS",
                "station": "RIOP"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -6.206275,
                    36.463351
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "ROAG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.676431,
                    34.235674
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "ROCK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -68.125756,
                    -67.571394
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25",
                "clock": "INTERNAL ",
                "receiver": "LEICA GRX1200+GNSS",
                "station": "ROTH"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -44.212479,
                    -2.593458
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL QUARTZ",
                "receiver": "TRIMBLE NETR9",
                "station": "SALU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -171.738421,
                    -13.849211
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "SAMO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -70.668553,
                    -33.150288
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "SANT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -106.398358,
                    52.196262
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "NOV750.R4",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "SASK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -38.432254,
                    -12.939246
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL QUARTZ",
                "receiver": "TRIMBLE NETR9",
                "station": "SAVO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    17.879211,
                    -29.669325
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701941.B",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETRS",
                "station": "SBOK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -66.832614,
                    54.832089
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3N DELTA",
                "station": "SCH2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.487933,
                    32.914425
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "SCIP"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -21.950337,
                    70.485333
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701941.B",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "SEPT POLARX5",
                "station": "SCOR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -63.159674,
                    -17.796791
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR10",
                "clock": "INTERNAL ",
                "receiver": "LEICA GR10",
                "station": "SCRZ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    166.758013,
                    -77.848985
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE ALLOY",
                "station": "SCTB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -75.762316,
                    20.012063
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAV_RINGANT_G3T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "SCUB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    127.303193,
                    36.522212
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "SEJN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    80.26591,
                    50.432695
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR10",
                "station": "SEME"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.479454,
                    -4.673651
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "SEY2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    55.530631,
                    -4.678731
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "SEYG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.754505,
                    34.459805
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945B_M",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETRS",
                "station": "SFDM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -6.205647,
                    36.464344
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25",
                "clock": "EXTERNAL CESIUM",
                "receiver": "LEICA GR25",
                "station": "SFER"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    79.874177,
                    6.892075
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_G5T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3",
                "station": "SGOC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -97.484821,
                    36.604184
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_G5T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3",
                "station": "SGPO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    121.200445,
                    31.099642
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "ASHTECH UZ-12",
                "station": "SHAO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -64.55201,
                    46.220691
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM29659.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR8",
                "station": "SHE2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    103.679438,
                    1.342981
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "SIN1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    135.936955,
                    33.577855
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "EXTERNAL NONE",
                "receiver": "TRIMBLE NETR9",
                "station": "SMST"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -119.524364,
                    33.247874
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "SNI1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    26.389287,
                    67.420787
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "SOD3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    23.394729,
                    42.556093
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "LEICA GRX1200GGPRO",
                "station": "SOFI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    159.954349,
                    -9.434915
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "SOLO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.646161,
                    34.059343
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "SPK1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    12.891345,
                    57.714956
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "SPT0"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -50.49237,
                    -21.929118
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "SPTU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -89.116202,
                    13.697257
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.80",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "SSIA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -122.173291,
                    37.426907
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "STFU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -5.667345,
                    -15.942534
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "STHL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -52.678308,
                    47.595435
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL ",
                "receiver": "SEPT POLARX5TR",
                "station": "STJ3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -52.677748,
                    47.595239
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3N DELTA",
                "station": "STJO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    141.844818,
                    43.528644
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL CESIUM",
                "receiver": "TRIMBLE ALLOY",
                "station": "STK2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -56.168244,
                    46.777824
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "STPM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    149.01005,
                    -35.315539
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX5",
                "station": "STR1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    149.010152,
                    -35.316166
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "STR2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    24.014488,
                    49.835589
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "SULP"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    20.810462,
                    -32.380211
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945G_M",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "SUTH"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    20.81091,
                    -32.381435
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_G5T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3",
                "station": "SUTM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    127.054238,
                    37.275516
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.80",
                "clock": "EXTERNAL CESIUM",
                "receiver": "TRIMBLE NETR9",
                "station": "SUWN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    29.780873,
                    60.532855
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "EXTERNAL H-MASER CH1-80",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "SVTL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    151.150377,
                    -33.780885
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX4TR",
                "station": "SYDN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    39.583744,
                    -69.006957
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM159900.00",
                "clock": "EXTERNAL CESIUM",
                "receiver": "TRIMBLE ALLOY",
                "station": "SYOG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -117.678282,
                    34.381849
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "TABL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    37.329106,
                    11.569072
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL ",
                "receiver": "LEICA GR25",
                "station": "TANA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    69.295566,
                    41.328049
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "SEPT ASTERX4",
                "station": "TASH"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    120.987389,
                    24.797986
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504",
                "clock": "INTERNAL",
                "receiver": "LEICA RS500",
                "station": "TCMS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    30.384007,
                    -23.07991
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETRS",
                "station": "TDOU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    51.334092,
                    35.697281
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "TEHN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -149.606442,
                    -17.577064
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX5TR",
                "station": "THTG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -149.606445,
                    -17.577058
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945E_M",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR8",
                "station": "THTI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -68.825031,
                    76.537048
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701073.1",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "THU2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    148.979996,
                    -35.39921
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5",
                "station": "TID1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    148.979998,
                    -35.399205
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "ASHTECH UZ-12",
                "station": "TIDB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    6.431581,
                    51.035234
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "TIT2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    128.866415,
                    71.634474
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR3_GGD",
                "clock": "INTERNAL",
                "receiver": "JPS EGGDT",
                "station": "TIXI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    1.480872,
                    43.560694
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "TLSE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    1.485042,
                    43.549713
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX5TR",
                "station": "TLSG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    120.987344,
                    24.797955
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "AOA BENCHMARK ACT",
                "station": "TNML"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -175.179223,
                    -21.144713
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "TONG"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -48.330679,
                    -10.171052
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "TOPL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.330604,
                    33.797798
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "TORP"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    147.055685,
                    -19.269286
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "TOW2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -117.803439,
                    33.617937
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "TRAK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    18.939631,
                    69.662714
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL RUBIDIUM",
                "receiver": "TRIMBLE NETR9",
                "station": "TRO1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    140.087116,
                    36.105576
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TRIMBLE NETR9",
                "station": "TSK2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    140.087497,
                    36.10568
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL CESIUM",
                "receiver": "TRIMBLE NETR9",
                "station": "TSKB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    29.450675,
                    40.786727
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM29659.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE 5700",
                "station": "TUBI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    179.196561,
                    -8.525291
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "TUVA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    121.164459,
                    24.953576
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "EXTERNAL STEERED H-MASER",
                "receiver": "SEPT POLARX4TR",
                "station": "TWTF"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -114.13385,
                    51.079974
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "UCAL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.44191,
                    34.069121
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "UCLP"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -125.54164,
                    48.925638
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL CLOCK",
                "receiver": "SEPT POLARX5",
                "station": "UCLU"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -49.230955,
                    -25.448367
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "UFPR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    107.05233,
                    47.865067
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_G5T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3",
                "station": "ULAB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    31.420924,
                    -28.293118
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701941.B",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "ULDI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -66.641704,
                    45.950209
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "UNB3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -66.641495,
                    45.950123
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM55971.00",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G2T DELTA",
                "station": "UNBD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -66.641706,
                    45.950209
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TPS LEGACY",
                "station": "UNBJ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -66.641704,
                    45.950209
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "NOV OEM6",
                "station": "UNBN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -65.407643,
                    -24.727457
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "INTERNAL",
                "receiver": "SEPT ASTERX4",
                "station": "UNSA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    151.231874,
                    -33.917767
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "UNX2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    151.231874,
                    -33.917767
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX4",
                "station": "UNX3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    60.614859,
                    56.838275
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "CHCC220GR2",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE R9S",
                "station": "URAL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    87.600671,
                    43.80795
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_G5T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3",
                "station": "URUM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -77.066277,
                    38.920566
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "USN7"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -77.066277,
                    38.920566
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "USN8"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -77.066277,
                    38.920566
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL H-MASER",
                "receiver": "NOV OEM6",
                "station": "USN9"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -77.066225,
                    38.918963
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL STEERED H-MASER",
                "receiver": "ASHTECH Z-XII3T",
                "station": "USNO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    178.446371,
                    -18.149086
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "HXCCGX601A",
                "clock": "INTERNAL",
                "receiver": "PANDA PD51A",
                "station": "USP1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    138.362044,
                    36.13311
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5",
                "station": "USUD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -156.615015,
                    71.322755
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAV_GRANT-G3T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TR_G3TH",
                "station": "UTQI"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    22.297616,
                    48.631976
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "NOV702GG",
                "clock": "INTERNAL",
                "receiver": "NOV OEMV3",
                "station": "UZHL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    57.497037,
                    -20.297091
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "VACS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -77.564166,
                    48.097057
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G5",
                "station": "VALD"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -3.951982,
                    40.443591
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX5",
                "station": "VILL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    18.367312,
                    57.653867
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "VIS0"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -120.616449,
                    34.556311
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "VNDP"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    46.793268,
                    -21.906301
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAV_RINGANT_G3T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TR_G3TH",
                "station": "VOIM"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    7.464255,
                    46.923751
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "SEPCHOKE_B3E6",
                "clock": "EXTERNAL UTC(CH) Master Clock",
                "receiver": "SEPT POLARX5TR",
                "station": "WAB2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    174.66278,
                    -36.434411
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TRIMBLE ALLOY",
                "station": "WARK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    12.101429,
                    54.16979
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "WARN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -77.066316,
                    38.920564
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL H-MASER",
                "receiver": "ITT 3750300",
                "station": "WDC5"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -77.066316,
                    38.920564
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G5",
                "clock": "EXTERNAL H-MASER",
                "receiver": "ITT 3750300",
                "station": "WDC6"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -71.493327,
                    42.613336
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR4",
                "clock": "EXTERNAL H-MASER",
                "receiver": "SEPT POLARX5",
                "station": "WES2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    174.805893,
                    -41.323456
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM115000.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE ALLOY",
                "station": "WGTN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.031169,
                    33.979885
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "WHC1"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -135.222112,
                    60.750513
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "WHIT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -116.391781,
                    33.934757
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM57971.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "WIDC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -122.16781,
                    52.236869
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "WILL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    17.089432,
                    -22.57492
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_G5T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3",
                "station": "WIND"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -118.055913,
                    34.226121
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TPSCR.G3",
                "clock": "INTERNAL",
                "receiver": "TPS NET-G3A",
                "station": "WLSN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    17.062028,
                    51.113264
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "INTERNAL",
                "receiver": "LEICA GR50",
                "station": "WROC"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    6.604501,
                    52.914601
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "WSRT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    12.878626,
                    49.144786
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL H-MASER EFOS 39",
                "receiver": "JAVAD TRE_G3TH DELTA",
                "station": "WTZ3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    12.878901,
                    49.144224
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH700936C_M",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX2",
                "station": "WTZA"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    12.878908,
                    49.144197
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL H-MASER EFOS 18",
                "receiver": "LEICA GR50",
                "station": "WTZR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    12.878626,
                    49.144786
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL CESIUM",
                "receiver": "SEPT POLARX5TR",
                "station": "WTZS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    12.878907,
                    49.144214
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R3",
                "clock": "EXTERNAL H-MASER EFOS 18",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "WTZZ"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    114.357259,
                    30.531649
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_G5T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3",
                "station": "WUH2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    114.357262,
                    30.531653
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00C",
                "clock": "EXTERNAL RUBIDIUM CLOCK STEERED BY GPS",
                "receiver": "TRIMBLE NETR9",
                "station": "WUHN"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    105.688495,
                    -10.449972
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "XMIS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    129.680301,
                    62.030961
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701933B_M",
                "clock": "EXTERNAL CESIUM",
                "receiver": "JAVAD TRE_3N DELTA",
                "station": "YAKT"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    115.346972,
                    -29.04656
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE ALLOY",
                "station": "YAR2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    115.347147,
                    -29.046501
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "YAR3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    115.346971,
                    -29.046594
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAT504",
                "clock": "INTERNAL",
                "receiver": "SEPT POLARX5",
                "station": "YARR"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -3.08863,
                    40.524898
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM29659.00",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TRIMBLE NETR9",
                "station": "YEBE"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -114.480846,
                    62.481321
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "LEIAR25.R4",
                "clock": "EXTERNAL VCH-1008 MASER",
                "receiver": "SEPT POLARX5TR",
                "station": "YEL2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -114.480698,
                    62.480895
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "EXTERNAL MASER",
                "receiver": "JAVAD TRE_3N DELTA",
                "station": "YELL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    56.112334,
                    22.186459
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "YIBL"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    -5.240093,
                    6.87056
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701945C_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "YKRO"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    127.001345,
                    37.541122
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL ",
                "receiver": "TRIMBLE NETR9",
                "station": "YONS"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    142.716719,
                    47.029736
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "ASH701933B_M",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3N DELTA",
                "station": "YSSK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    28.311012,
                    -15.425541
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "AOAD/M_T",
                "clock": "INTERNAL",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "ZAMB"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    41.565067,
                    43.788391
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "JAVRINGANT_DM",
                "clock": "EXTERNAL H-MASER VCH-1003M",
                "receiver": "JAVAD TRE_3 DELTA",
                "station": "ZECK"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    7.465027,
                    46.877091
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "ZIM2"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    7.465027,
                    46.877091
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM59800.00",
                "clock": "EXTERNAL H-MASER",
                "receiver": "TRIMBLE NETR9",
                "station": "ZIM3"
            },
            "type": "Feature"
        },
        {
            "geometry": {
                "coordinates": [
                    7.465273,
                    46.877095
                ],
                "type": "Point"
            },
            "properties": {
                "antenna": "TRM29659.00",
                "clock": "INTERNAL",
                "receiver": "TRIMBLE NETR9",
                "station": "ZIMM"
            },
            "type": "Feature"
        }
    ],
    "type": "FeatureCollection"
}