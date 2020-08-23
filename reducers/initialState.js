export const initialState = {
        pending : false,
        products : [],
        error : null,
	itinerary : new Array(),
	disliked : new Array(),
	places : [
                {
                        id : 'ChIJ4zGFAZpYwokRGUGph3Mf37k',
                        name : 'Central Park',
                        description : 'New York\'s escape from New York',
                        image : require('../assets/data/central-park.jpg')
                },
                {
                        id : 'ChIJPTacEpBQwokddKwIlDXelxkA',
                        name : 'Statue of Liberty National Monument',
                        description : 'A figure of Libertas, a robed Roman liberty goddess',
                        image : require('../assets/data/Statue-of-Liberty-Island-New-York.jpg')
                },
                {
                        id : 'ChIJPTacEpBQwokRswIlDXelxkA',
                        name : 'Rockefeller Center',
                        description : 'A large complex Midtown Manhattan, New York City',
                        image : require('../assets/data/rockefellar-center.jpg')
                }
        ] 
};


