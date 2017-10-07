'use strict';

exports.models = {
    'obstacles': {
        'id': 'obstacles',
        'properties': {
            'type': {
                'type': 'string',
                'description': 'Tipo do Obstaculo'
            },
            'latitude': {
                'type': 'number',
                'description': 'Latitude'
            },
            'longitude': {
                'type': 'number',
                'description': 'Longitude'
            }

        }
    }
};
