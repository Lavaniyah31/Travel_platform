import { useEffect, useState } from 'react'
import './App.css'

const fallbackData = {
  overview: {
    waiting: 18,
    stale: 4,
    quotations: 27,
    open: 8,
    bookings: 12,
    confirmed: 7,
    partnerTasks: 9,
    dueToday: 4,
  },
  enquiries: [
    { client: 'Mercury Logistics', destination: 'Dubai, UAE', dates: '12–19 Jul', travellers: 8, value: '€18,940', owner: 'J. Tate', status: 'Quoted', statusClass: 'badge orange' },
    { client: 'Northwind Energy', destination: 'San Francisco', dates: '02–09 Aug', travellers: 4, value: '€26,540', owner: 'M. Ross', status: 'Accepted', statusClass: 'badge green' },
    { client: 'Sable Capital', destination: 'Mexico City', dates: '15–22 Sep', travellers: 6, value: '€12,100', owner: 'A. Lee', status: 'Stale', statusClass: 'badge red' },
    { client: 'Ridge Retail', destination: 'Dubai, UAE', dates: '30 Sep–04 Oct', travellers: 3, value: '€9,650', owner: 'H. Voss', status: 'Requested', statusClass: 'badge slate' },
  ],
  tripServices: [
    { name: 'London Heathrow → Dubai DXB', type: 'Flight', status: 'Confirmed', price: '€2,420', meta: 'EK 211 • 7h 20m • Business' },
    { name: 'The Connaught', type: 'Hotel', status: 'Quoted', price: '€1,940', meta: '3 nights • Executive city view' },
    { name: 'The River Room', type: 'Restaurant', status: 'Requested', price: '€660', meta: 'Dinner for 8 • 19:30' },
    { name: 'Reykjavík → London', type: 'Flight', status: 'Draft', price: '€860', meta: 'Icelandair • 1 stop' },
  ],
  flights: [
    { airline: 'Emirates', departure: '07:25', arrival: '18:15', duration: '10h 50m', stops: '1 stop', route: 'LHR → DXB → MCT', fares: [
      { name: 'Economy', price: '€1,240', baggage: '1 cabin + 23kg', cancellation: 'Flexible 24h' },
      { name: 'Premium', price: '€1,610', baggage: '2 cabin + 32kg', cancellation: 'Cancel 72h' },
      { name: 'Business', price: '€2,420', baggage: '2 cabin + 46kg', cancellation: 'Fully refundable' },
    ] },
    { airline: 'Qatar Airways', departure: '11:40', arrival: '21:55', duration: '10h 15m', stops: 'Non-stop', route: 'LHR → DOH', fares: [
      { name: 'Economy', price: '€1,310', baggage: '1 cabin + 23kg', cancellation: 'Standard' },
      { name: 'Business', price: '€2,660', baggage: '2 cabin + 46kg', cancellation: 'Flexible' },
    ] },
  ],
  hotels: [
    { name: 'The Maybourne', rating: '5 star', location: 'London, Mayfair', score: '9.1 / 10', leadPrice: '€482/night', roomType: 'Deluxe King', board: 'Room only', cancellation: 'Free cancel to 72h', inventory: '3 rooms • 5 nights' },
    { name: 'The Standard', rating: '4 star', location: 'London, Kings Cross', score: '8.7 / 10', leadPrice: '€298/night', roomType: 'Superior Twin', board: 'Breakfast', cancellation: '48h notice', inventory: '2 rooms • 5 nights' },
    { name: 'No photo hotel', rating: '3 star', location: 'Paris, Bastille', score: '8.5 / 10', leadPrice: '€228/night', roomType: 'Double Studio', board: 'Half board', cancellation: 'Strict', inventory: '1 room • 3 nights' },
  ],
  restaurants: [
    { name: 'Aster & Vine', cuisine: 'Modern European', location: 'Clerkenwell', priceBand: '£££', booking: 'Available', availability: '19:30 fully booked, nearby at 20:00 / 20:15', phoneOnly: false },
    { name: 'Saffron Court', cuisine: 'Indian', location: 'Soho', priceBand: '££', booking: 'Limited', availability: '18:45 unavailable • 19:15 and 21:00 available', phoneOnly: false },
    { name: 'Le Verre Bleu', cuisine: 'French Bistro', location: 'Marais', priceBand: '£££', booking: 'Phone only', availability: 'Must be arranged by telephone', phoneOnly: true },
  ],
}

function App() {
  const [data, setData] = useState(fallbackData)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('http://localhost:8001/api/overview')
        if (!response.ok) throw new Error('API unavailable')
        const apiData = await response.json()
        setData(apiData)
      } catch (error) {
        setData(fallbackData)
      }
    }

    loadData()
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar-hero">
        <div className="brand-wrap">
          <div className="brand-mark" aria-hidden="true" />
          <div>
            <div className="eyebrow">Business travel platform</div>
            <h1>Astera</h1>
          </div>
        </div>
        <div className="pill">B2B ops • desktop first</div>
      </header>

      <main className="screen-grid">
        <section className="screen-card">
          <div className="screen-header">
            <span className="screen-tag">01 • splash</span>
            <div className="window-dots"><span /><span /><span /></div>
          </div>
          <div className="splash-panel">
            <div className="brand-mark large" aria-hidden="true" />
            <h2>Astera</h2>
            <p>Travel operations</p>
            <div className="loading-dots"><span /><span /><span /></div>
          </div>
        </section>

        <section className="screen-card">
          <div className="screen-header">
            <span className="screen-tag">02 • login</span>
            <div className="window-dots"><span /><span /><span /></div>
          </div>
          <div className="login-panel">
            <div className="login-shell">
              <div className="login-topline">
                <div className="mini-brand"><span className="mini-mark" />Astera</div>
                <span className="status neutral">Partner + internal</span>
              </div>

              <div className="login-fields">
                <label className="field-group">
                  <span>Email</span>
                  <input defaultValue="jude@northstartravel.co" />
                </label>

                <label className="field-group">
                  <span>Password</span>
                  <input className="error" type="password" defaultValue="password" />
                  <small className="error-text">Incorrect email or password. Try again or reset access.</small>
                </label>

                <div className="link-row">
                  <button type="button" className="text-button">Forgot password?</button>
                  <button type="button" className="text-button">First-time setup</button>
                </div>

                <button type="button" className="primary-button">Sign in</button>
              </div>

              <div className="login-foot">
                <span>Not activated yet?</span>
                <button type="button" className="text-button">Account pending</button>
              </div>
            </div>
          </div>
        </section>

        <section className="screen-card">
          <div className="screen-header">
            <span className="screen-tag">03 • dashboard</span>
            <div className="window-dots"><span /><span /><span /></div>
          </div>
          <div className="dashboard-panel">
            <div className="dash-shell">
              <div className="dash-topbar">
                <div className="mini-brand"><span className="mini-mark" />Astera</div>
                <div className="search-pill">Search client, trip, route</div>
                <div className="avatar">JN</div>
              </div>

              <div className="metric-grid">
                <div className="mini-card">
                  <div className="card-label">Waiting on response</div>
                  <p className="count-large">{data.overview.waiting}</p>
                  <div className="meta-inline"><span>New enquiries</span><span className="status warning">{data.overview.stale} stale</span></div>
                </div>
                <div className="mini-card">
                  <div className="card-label">Quotations sent</div>
                  <p className="count-large">{data.overview.quotations}</p>
                  <div className="meta-inline"><span>Awaiting decision</span><span className="status info">{data.overview.open} open</span></div>
                </div>
                <div className="mini-card">
                  <div className="card-label">Bookings requested</div>
                  <p className="count-large">{data.overview.bookings}</p>
                  <div className="meta-inline"><span>Supplier approval</span><span className="status success">{data.overview.confirmed} confirmed</span></div>
                </div>
                <div className="mini-card">
                  <div className="card-label">Partner tasks</div>
                  <p className="count-large">{data.overview.partnerTasks}</p>
                  <div className="meta-inline"><span>My agency</span><span className="status neutral">{data.overview.dueToday} due today</span></div>
                </div>
              </div>

              <div className="list-table">
                <div className="table-head">
                  <span>Client</span>
                  <span>Trip</span>
                  <span>Owner</span>
                  <span>Value</span>
                  <span>Status</span>
                </div>

                {data.enquiries.slice(0, 4).map((item) => (
                  <div key={item.client} className="table-row">
                    <span className="client-name">{item.client}</span>
                    <span className="muted-cell">{item.destination}</span>
                    <span className="owner-cell"><span className="tiny-avatar">{item.owner.split('.')[0][0]}{item.owner.split('.')[1][0]}</span>{item.owner}</span>
                    <span>{item.value}</span>
                    <span><span className={`badge ${item.statusClass.replace('badge ', '')}`}>{item.status}</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="screen-card">
          <div className="screen-header">
            <span className="screen-tag">04 • enquiries</span>
            <div className="window-dots"><span /><span /><span /></div>
          </div>
          <div className="table-panel">
            <div className="panel-toolbar">
              <h3>Enquiries</h3>
              <button type="button" className="secondary-button">+ New enquiry</button>
            </div>

            <div className="filter-row">
              {['All states', 'Destination', 'Travel dates', 'Owner', 'Status'].map((item) => (
                <button key={item} type="button" className="filter-chip">{item}</button>
              ))}
            </div>

            <div className="data-table">
              <div className="table-head data-head">
                <span>Client</span>
                <span>Destination</span>
                <span>Dates</span>
                <span>Travellers</span>
                <span>Value</span>
                <span>Owner</span>
                <span>Status</span>
              </div>

              {data.enquiries.map((row) => (
                <div key={`${row.client}-${row.dates}`} className="table-row data-row">
                  <span>{row.client}</span>
                  <span>{row.destination}</span>
                  <span>{row.dates}</span>
                  <span>{row.travellers}</span>
                  <span>{row.value}</span>
                  <span>{row.owner}</span>
                  <span><span className={row.statusClass}>{row.status}</span></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="screen-card">
          <div className="screen-header">
            <span className="screen-tag">05 • trip detail</span>
            <div className="window-dots"><span /><span /><span /></div>
          </div>
          <div className="detail-panel">
            <div className="detail-header">
              <div>
                <div className="detail-headline">Mercury Logistics</div>
                <div className="detail-sub">Dubai • 12–19 Jul • 8 travellers</div>
              </div>
              <button type="button" className="secondary-button">Add service</button>
            </div>

            <div className="trip-stats">
              <div className="stat-box"><span>Client</span><strong>Mercury Logistics</strong></div>
              <div className="stat-box"><span>Trip value</span><strong>€28,260</strong></div>
              <div className="stat-box"><span>Trip status</span><strong>Partially booked</strong></div>
            </div>

            <div className="service-list">
              {data.tripServices.map((service) => (
                <div key={service.name} className="service-item">
                  <div className="service-copy">
                    <div className="service-name">{service.name}</div>
                    <div className="service-meta">{service.type} • {service.meta}</div>
                  </div>
                  <div className="service-side">
                    <span className={`mini-badge ${service.status.toLowerCase().replace(/\s+/g, '-')}`}>{service.status}</span>
                    <strong>{service.price}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="trip-total">
              <span>Trip total</span>
              <strong>€28,260</strong>
            </div>
          </div>
        </section>

        <section className="screen-card">
          <div className="screen-header">
            <span className="screen-tag">06 • flights</span>
            <div className="window-dots"><span /><span /><span /></div>
          </div>
          <div className="search-panel">
            <div className="search-toolbar">
              <div className="search-fields">
                <span>DXB • LHR</span>
                <span>12 Jun ± 3 days</span>
                <span>2 adults</span>
              </div>
              <button type="button" className="secondary-button">Search</button>
            </div>

            <div className="flight-list">
              {data.flights.map((flight) => (
                <div key={flight.airline} className="flight-card">
                  <div className="flight-header">
                    <div>
                      <strong>{flight.airline}</strong>
                      <div className="route-meta">{flight.departure} → {flight.arrival} • {flight.duration}</div>
                    </div>
                    <span className="flight-stop">{flight.stops}</span>
                  </div>

                  <div className="route-line"><span>{flight.route}</span></div>

                  <div className="fare-grid">
                    {flight.fares.map((fare) => (
                      <div key={fare.name} className="fare-box">
                        <div className="fare-top"><strong>{fare.name}</strong><span>{fare.price}</span></div>
                        <ul>
                          <li>{fare.baggage}</li>
                          <li>{fare.cancellation}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="screen-card">
          <div className="screen-header">
            <span className="screen-tag">07 • hotels</span>
            <div className="window-dots"><span /><span /><span /></div>
          </div>
          <div className="hotel-panel">
            <div className="search-toolbar compact">
              <div className="search-fields">
                <span>London</span>
                <span>3 rooms</span>
                <span>5 nights</span>
              </div>
              <button type="button" className="secondary-button">Edit</button>
            </div>

            <div className="hotel-list">
              {data.hotels.map((hotel) => (
                <div key={hotel.name} className="hotel-card">
                  <div className={`hotel-thumb ${hotel.name === 'No photo hotel' ? 'missing-photo' : ''}`}>
                    {hotel.name === 'No photo hotel' ? 'No photo available' : 'Image'}
                  </div>
                  <div className="hotel-body">
                    <div className="hotel-topline">
                      <div>
                        <h4>{hotel.name}</h4>
                        <div className="hotel-meta">{hotel.rating} • {hotel.location}</div>
                      </div>
                      <span className="score-pill">Guest score {hotel.score}</span>
                    </div>
                    <div className="room-grid">
                      <div className="room-box">
                        <strong>{hotel.roomType}</strong>
                        <span>{hotel.board}</span>
                        <small>{hotel.cancellation}</small>
                      </div>
                      <div className="price-box">
                        <strong>{hotel.leadPrice}</strong>
                        <span>{hotel.inventory}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="screen-card">
          <div className="screen-header">
            <span className="screen-tag">08 • restaurants</span>
            <div className="window-dots"><span /><span /><span /></div>
          </div>
          <div className="restaurant-panel">
            <div className="search-toolbar compact">
              <div className="search-fields">
                <span>12 Jul</span>
                <span>19:30</span>
                <span>8 covers</span>
              </div>
              <button type="button" className="secondary-button">Find table</button>
            </div>

            <div className="restaurant-list">
              {data.restaurants.map((restaurant) => (
                <div key={restaurant.name} className="restaurant-card">
                  <div className="restaurant-head">
                    <div>
                      <strong>{restaurant.name}</strong>
                      <span>{restaurant.cuisine}</span>
                    </div>
                    <span className="price-band">{restaurant.priceBand}</span>
                  </div>
                  <div className="restaurant-meta">{restaurant.location}</div>
                  <div className="restaurant-status-row">
                    <span className={`booking-pill ${restaurant.phoneOnly ? 'phone' : 'available'}`}>{restaurant.booking}</span>
                    <span className="status-copy">{restaurant.availability}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="screen-card full-width">
          <div className="screen-header">
            <span className="screen-tag">Token set</span>
            <div className="window-dots"><span /><span /><span /></div>
          </div>

          <div className="token-grid">
            <div className="token-card">
              <div className="swatches">
                <span className="swatch navy" />
                <span className="swatch teal" />
                <span className="swatch gold" />
                <span className="swatch slate" />
              </div>
              <div className="token-copy">
                <h4>Core palette</h4>
                <p>Deep navy for authority, teal for operations, gold for premium, neutral slate for supporting data.</p>
              </div>
            </div>

            <div className="token-card">
              <div className="type-scale">
                <span>H1 42 / 700</span>
                <span>H2 28 / 600</span>
                <span>Body 14 / 500</span>
                <span>Meta 11 / 700</span>
              </div>
              <div className="token-copy">
                <h4>Type</h4>
                <p>Clear hierarchy tuned for dense tables and quick scanning on desktop screens.</p>
              </div>
            </div>

            <div className="token-card">
              <div className="state-pills">
                <span className="status success">Confirmed</span>
                <span className="status warning">Quoted</span>
                <span className="status danger">Cancelled</span>
                <span className="status neutral">Draft</span>
              </div>
              <div className="token-copy">
                <h4>Semantic states</h4>
                <p>States read at a glance without relying on color alone.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="screen-card full-width">
          <div className="screen-header">
            <span className="screen-tag">Core components</span>
            <div className="window-dots"><span /><span /><span /></div>
          </div>

          <div className="component-grid">
            <div className="component-card">
              <h4>Buttons & inputs</h4>
              <button type="button" className="primary-button small">Primary action</button>
              <button type="button" className="secondary-button small">Secondary action</button>
              <label className="field-group compact-field">
                <span>Client search</span>
                <input defaultValue="Acme Europe" className="error" />
              </label>
            </div>

            <div className="component-card">
              <h4>Tabs & table</h4>
              <div className="tab-row">
                <span className="tab active">Open</span>
                <span className="tab">Quoted</span>
                <span className="tab">Booked</span>
              </div>
              <div className="mini-table">
                <span>Northwind Energy</span>
                <span>€26,540</span>
                <span><span className="badge green">Accepted</span></span>
              </div>
            </div>

            <div className="component-card">
              <h4>Modals & toasts</h4>
              <div className="modal-demo">
                <div className="modal-head">
                  <span>Supplier confirmation</span>
                  <button type="button" className="close-btn">×</button>
                </div>
                <p>Hotel group has responded with one availability change.</p>
              </div>
              <div className="toast-demo">Saved successfully</div>
            </div>
          </div>
        </section>

        <section className="screen-card full-width rationale-box">
          <div className="screen-header">
            <span className="screen-tag">Rationale</span>
            <div className="window-dots"><span /><span /><span /></div>
          </div>

          <p>
            Astera is a name chosen for its sense of scale, precision and trust. It feels operational rather than consumer-facing, which suits a business tool used all day by specialists. The product direction is disciplined and data-first: deep navy for authority, teal for workflow progress, and warm gold as an accent that signals premium service without turning the UI into a sales brochure. I deliberately ruled out playful travel imagery, soft gradients, and lifestyle-led styling because this audience values speed and clarity more than atmosphere. The layout uses dense rows, compact controls, and strong status patterns, with enough whitespace to keep reading efficient but not luxurious. I would have refined the mobile adaptation and advanced interaction states with more time, especially around filter persistence and empty states for the richer service selection flows.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
