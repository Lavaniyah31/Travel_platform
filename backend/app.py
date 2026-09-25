from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title='Astera API')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

fallback_data = {
    'overview': {
        'waiting': 18,
        'stale': 4,
        'quotations': 27,
        'open': 8,
        'bookings': 12,
        'confirmed': 7,
        'partnerTasks': 9,
        'dueToday': 4,
    },
    'enquiries': [
        {'client': 'Mercury Logistics', 'destination': 'Dubai, UAE', 'dates': '12–19 Jul', 'travellers': 8, 'value': '€18,940', 'owner': 'J. Tate', 'status': 'Quoted', 'statusClass': 'badge orange'},
        {'client': 'Northwind Energy', 'destination': 'San Francisco', 'dates': '02–09 Aug', 'travellers': 4, 'value': '€26,540', 'owner': 'M. Ross', 'status': 'Accepted', 'statusClass': 'badge green'},
        {'client': 'Sable Capital', 'destination': 'Mexico City', 'dates': '15–22 Sep', 'travellers': 6, 'value': '€12,100', 'owner': 'A. Lee', 'status': 'Stale', 'statusClass': 'badge red'},
        {'client': 'Ridge Retail', 'destination': 'Dubai, UAE', 'dates': '30 Sep–04 Oct', 'travellers': 3, 'value': '€9,650', 'owner': 'H. Voss', 'status': 'Requested', 'statusClass': 'badge slate'},
    ],
    'tripServices': [
        {'name': 'London Heathrow → Dubai DXB', 'type': 'Flight', 'status': 'Confirmed', 'price': '€2,420', 'meta': 'EK 211 • 7h 20m • Business'},
        {'name': 'The Connaught', 'type': 'Hotel', 'status': 'Quoted', 'price': '€1,940', 'meta': '3 nights • Executive city view'},
        {'name': 'The River Room', 'type': 'Restaurant', 'status': 'Requested', 'price': '€660', 'meta': 'Dinner for 8 • 19:30'},
        {'name': 'Reykjavík → London', 'type': 'Flight', 'status': 'Draft', 'price': '€860', 'meta': 'Icelandair • 1 stop'},
    ],
    'flights': [
        {'airline': 'Emirates', 'departure': '07:25', 'arrival': '18:15', 'duration': '10h 50m', 'stops': '1 stop', 'route': 'LHR → DXB → MCT', 'fares': [
            {'name': 'Economy', 'price': '€1,240', 'baggage': '1 cabin + 23kg', 'cancellation': 'Flexible 24h'},
            {'name': 'Premium', 'price': '€1,610', 'baggage': '2 cabin + 32kg', 'cancellation': 'Cancel 72h'},
            {'name': 'Business', 'price': '€2,420', 'baggage': '2 cabin + 46kg', 'cancellation': 'Fully refundable'},
        ]},
        {'airline': 'Qatar Airways', 'departure': '11:40', 'arrival': '21:55', 'duration': '10h 15m', 'stops': 'Non-stop', 'route': 'LHR → DOH', 'fares': [
            {'name': 'Economy', 'price': '€1,310', 'baggage': '1 cabin + 23kg', 'cancellation': 'Standard'},
            {'name': 'Business', 'price': '€2,660', 'baggage': '2 cabin + 46kg', 'cancellation': 'Flexible'},
        ]},
    ],
    'hotels': [
        {'name': 'The Maybourne', 'rating': '5 star', 'location': 'London, Mayfair', 'score': '9.1 / 10', 'leadPrice': '€482/night', 'roomType': 'Deluxe King', 'board': 'Room only', 'cancellation': 'Free cancel to 72h', 'inventory': '3 rooms • 5 nights'},
        {'name': 'The Standard', 'rating': '4 star', 'location': 'London, Kings Cross', 'score': '8.7 / 10', 'leadPrice': '€298/night', 'roomType': 'Superior Twin', 'board': 'Breakfast', 'cancellation': '48h notice', 'inventory': '2 rooms • 5 nights'},
        {'name': 'No photo hotel', 'rating': '3 star', 'location': 'Paris, Bastille', 'score': '8.5 / 10', 'leadPrice': '€228/night', 'roomType': 'Double Studio', 'board': 'Half board', 'cancellation': 'Strict', 'inventory': '1 room • 3 nights'},
    ],
    'restaurants': [
        {'name': 'Aster & Vine', 'cuisine': 'Modern European', 'location': 'Clerkenwell', 'priceBand': '£££', 'booking': 'Available', 'availability': '19:30 fully booked, nearby at 20:00 / 20:15', 'phoneOnly': False},
        {'name': 'Saffron Court', 'cuisine': 'Indian', 'location': 'Soho', 'priceBand': '££', 'booking': 'Limited', 'availability': '18:45 unavailable • 19:15 and 21:00 available', 'phoneOnly': False},
        {'name': 'Le Verre Bleu', 'cuisine': 'French Bistro', 'location': 'Marais', 'priceBand': '£££', 'booking': 'Phone only', 'availability': 'Must be arranged by telephone', 'phoneOnly': True},
    ],
}

@app.get('/api/overview')
def get_overview():
    return fallback_data

@app.get('/')
def root():
    return {'message': 'Astera API is running'}
