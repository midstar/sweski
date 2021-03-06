// Defined in same order as presented in the table
keys = [
    "name",
    "altitude",
    "vertical_drop",
    "piste_count",
    "piste_count@green",
    "piste_count@blue",
    "piste_count@red",
    "piste_count@black",
    "piste_longest",
    "lift_count",
    "lift_count@chair",
    "lift_count@surface",
    "lift_count@gondola",
    "distance" // Will be calculated
];

// Language translations
language = {
    // Swedish language
    "English" : {

        // Part 1 - Localication of HTML tags (based on ID)
        // These are mandatory for all type of databases
        "html-tag-id" : {
            "tab-table" : "Table",
            "tab-map" : "Map",
            "tab-plot" : "Plot",
            "plot-select-measure-label" : "Measure",
            "plot-select-sort-label" : "Sort",
            "plot-select-sort-asc-label" : "Ascending",
            "settings-language-title" : "Language",
            "settings-location-title" : "My location",
            "settings-location-lat-label" : "Latitude",
            "settings-location-lon-label" : "Longitude",
            "settings-location-fetch" : "Fetch my position",
            "settings-location-select-map" : "Select on map"
        },

        // Part 2 - Localization of database keys
        // These depends on which keys you have defined in your database
        "name" : "Name",
        "altitude" : "Altitude",
        "vertical_drop" : "Vertical drop",
        "piste_count" : "Piste count",
        "piste_count@green" : "Green piste count",
        "piste_count@blue" : "Blue piste count",
        "piste_count@red" : "Red piste count",
        "piste_count@black" : "Black piste count",
        "piste_longest" : "Longest piste",
        "lift_count" : "Lift count",
        "lift_count@chair" : "Chair lift count",
        "lift_count@surface" : "Surface lift count",
        "lift_count@gondola" : "Gondola lift count",
        "distance" : "Distance (km)"
    },

    // Swedish language
    "Svenska" : {

        // Part 1 - Localication of HTML tags (based on ID)
        // These are mandatory for all type of databases
        "html-tag-id" : {
            "tab-table" : "Tabell",
            "tab-map" : "Karta",
            "tab-plot" : "Diagram",
            "plot-select-measure-label" : "Mått",
            "plot-select-sort-label" : "Sortering",
            "plot-select-sort-asc-label" : "Stigande",
            "settings-language-title" : "Språk",
            "settings-location-title" : "Min plats",
            "settings-location-lat-label" : "Latitud",
            "settings-location-lon-label" : "Longitud",
            "settings-location-fetch" : "Hämta min position",
            "settings-location-select-map" : "Välj på karta"
        },

        // Part 2 - Localization of database keys
        // These depends on which keys you have defined in your database
        "name" : "Namn",
        "altitude" : "Höjd över havet",
        "vertical_drop" : "Fallhöjd",
        "piste_count" : "Antal nedfarter",
        "piste_count@green" : "Antal gröna nedfarter",
        "piste_count@blue" : "Antal blå nedfarter",
        "piste_count@red" : "Antal röda nedfarter",
        "piste_count@black" : "Antal svarta nedfarter",
        "piste_longest" : "Längsta nedfart",
        "lift_count" : "Antal liftar",
        "lift_count@chair" : "Antal stolsliftar",
        "lift_count@surface" : "Antal släpliftar",
        "lift_count@gondola" : "Antal berg, kabin eller gondolliftar",
        "distance" : "Avstånd (km)"
    }
};

// Name must be unique, will be used as key in references
database = [
    {
        "name" : "Stöten",
        "altitude" : 948,
        "vertical_drop" : 370,
        "piste_count" : 47,
        "piste_count@green" : 27,
        "piste_count@blue" : 11,
        "piste_count@red" : 4,
        "piste_count@black" : 5,
        "piste_longest" : 3060,
        "lift_count" : 21,
        "lift_count@chair" : 2,
        "lift_count@surface" : 19,
        "lift_count@gondola" : 0,
        "latitude" : 61.274824447454634, 
        "longitude" : 12.898966698853474
    },
    {
        "name" : "Björnrike",
        "altitude" : 950,
        "vertical_drop" : 470,
        "piste_count" : 16,
        "piste_count@green" : 4,
        "piste_count@blue" : 4,
        "piste_count@red" : 6,
        "piste_count@black" : 3,
        "piste_longest" : 2100,
        "lift_count" : 12,
        "lift_count@chair" : 1,
        "lift_count@surface" : 11,
        "lift_count@gondola" : 0,
        "latitude" : 62.4228664877963, 
        "longitude" : 13.957621303714978
    },
    {
        "name" : "Romme Alpin",
        "altitude" : 407,
        "vertical_drop" : 275,
        "piste_count" : 33,
        "piste_count@green" : 9,
        "piste_count@blue" : 11,
        "piste_count@red" : 3,
        "piste_count@black" : 10,
        "piste_longest" : 2700,
        "lift_count" : 13,
        "lift_count@chair" : 5,
        "lift_count@surface" : 8,
        "lift_count@gondola" : 0,
        "latitude" : 60.39364522001965, 
        "longitude" : 15.382514100529649
    },
    {
        "name" : "Åre",
        "altitude" : 1274,
        "vertical_drop" : 890,
        "piste_count" : 89,
        "piste_count@green" : 15,
        "piste_count@blue" : 39,
        "piste_count@red" : 31,
        "piste_count@black" : 4,
        "piste_longest" : 6500,
        "lift_count" : 41,
        "lift_count@chair" : 7,
        "lift_count@surface" : 30,
        "lift_count@gondola" : 4,
        "latitude" : 63.40590905840682, 
        "longitude" : 13.077881958996054
    },
    {
        "name" : "Idre Fjäll",
        "altitude" : 890,
        "vertical_drop" : 307,
        "piste_count" : 41,
        "piste_count@green" : 16,
        "piste_count@blue" : 10,
        "piste_count@red" : 5,
        "piste_count@black" : 10,
        "piste_longest" : 2800,
        "lift_count" : 24,
        "lift_count@chair" : 4,
        "lift_count@surface" : 16,
        "lift_count@gondola" : 0,
        "latitude" : 61.8905057807043, 
        "longitude" : 12.832153473844823
    },
    {
        "name" : "Kungsberget",
        "altitude" : 309,
        "vertical_drop" : 200,
        "piste_count" : 22,
        "piste_count@green" : 7,
        "piste_count@blue" : 7,
        "piste_count@red" : 3,
        "piste_count@black" : 3,
        "piste_longest" : 1200,
        "lift_count" : 10,
        "lift_count@chair" : 3,
        "lift_count@surface" : 7,
        "lift_count@gondola" : 0,
        "latitude" : 60.75985980297969, 
        "longitude" : 16.497606982828785 
    },
    {
        "name" : "Hundfjället",
        "altitude" : 925,
        "vertical_drop" : 240,
        "piste_count" : 22,
        "piste_count@green" : 6,
        "piste_count@blue" : 4,
        "piste_count@red" : 8,
        "piste_count@black" : 4,
        "piste_longest" : 2100,
        "lift_count" : 18,
        "lift_count@chair" : 3,
        "lift_count@surface" : 15,
        "lift_count@gondola" : 0,
        "latitude" : 61.17667448340161, 
        "longitude" : 12.964537320359492 
    },
    {
        "name" : "Tandådalen",
        "altitude" : 925,
        "vertical_drop" : 240,
        "piste_count" : 29,
        "piste_count@green" : 8,
        "piste_count@blue" : 8,
        "piste_count@red" : 5,
        "piste_count@black" : 8,
        "piste_longest" : 2100,
        "lift_count" : 22,
        "lift_count@chair" : 2,
        "lift_count@surface" : 20,
        "lift_count@gondola" : 0,
        "latitude" : 61.176456429481945, 
        "longitude" : 13.000819795824926 
    },
    {
        "name" : "Lindvallen/Högfjället",
        "altitude" : 924,
        "vertical_drop" : 303,
        "piste_count" : 57,
        "piste_count@green" : 31,
        "piste_count@blue" : 9,
        "piste_count@red" : 11,
        "piste_count@black" : 4,
        "piste_longest" : 2500,
        "lift_count" : 48,
        "lift_count@chair" : 4,
        "lift_count@surface" : 44,
        "lift_count@gondola" : 0,
        "latitude" : 61.152354120223826, 
        "longitude" : 13.149312456350115 
    },
    {
        "name" : "Orsa/Grönklitt",
        "altitude" : 561,
        "vertical_drop" : 165,
        "piste_count" : 23,
        "piste_count@green" : 2,
        "piste_count@blue" : 12,
        "piste_count@red" : 7,
        "piste_count@black" : 2,
        "piste_longest" : 1600,
        "lift_count" : 15,
        "lift_count@chair" : 1,
        "lift_count@surface" : 14,
        "lift_count@gondola" : 0,
        "latitude" : 61.213445630900495, 
        "longitude" : 14.542228329181208 
    }

    /* Template
    {
        "name" : "",
        "altitude" : ,
        "vertical_drop" : ,
        "piste_count" : ,
        "piste_count@green" : ,
        "piste_count@blue" : ,
        "piste_count@red" : ,
        "piste_count@black" : ,
        "piste_longest" : ,
        "lift_count" : ,
        "lift_count@chair" : ,
        "lift_count@surface" : ,
        "lift_count@gondola" : ,
        "latitude" : , 
        "longitude" : 
    }
    */
];

// Most of these configurations can be changed
// by the client by URL parameters
config = {
    "lang" : "Svenska",
    "latitude" : 59.32679732636055, 
    "longitude" : 18.07172903837957,
    "map_zoom" : 5.5,
    "tab_selected" : "tab-table",
    "sort_selected" : "name",
    "sort_ascending" : true,
    "plot_label" : "name",
    "plot_selected" : "vertical_drop",
};