module SampleTypescript {
    export module Routes {
        export class HomeRoute {
            static Pages: Array<IRoute> = [
                {
                    route: "/",
                    templateUrl: "home/views/home.html"
                }
            ]
        }
    }
}