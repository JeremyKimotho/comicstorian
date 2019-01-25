// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_url: `https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=9ec7cd667dd9d330cbc3a46b436264d5b3fdf215&format=json&filter=name:`,
  character_url_filter: `?api_key=9ec7cd667dd9d330cbc3a46b436264d5b3fdf215&format=json&field_list=powers`,
  default_url: `https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=9ec7cd667dd9d330cbc3a46b436264d5b3fdf215&limit=1&format=json&filter=name:silver%20surfer`,
  proxy: `https://cors-anywhere.herokuapp.com/`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
