
export class Config {
    constructor(
        private conf_date:any = "",
        private conf_stations:string[] = [],
        private conf_prns:string[] = []
    ){}

    public get date(){return this.conf_date;}
    public get stations(){return this.conf_stations;}
    public get prns(){return this.conf_prns;}

    public set date(newDate:any){this.conf_date = newDate;}
    public set stations(newStations:string[]){this.conf_stations = newStations;}
    public set prns(newPrns:string[]){this.conf_prns = newPrns;}

}