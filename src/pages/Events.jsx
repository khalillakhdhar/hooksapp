import { useState } from "react";
function Events() {
// formulaire avec titre dateHeure (locale) + description
const [event, setEvent] = useState({title: '', dateHeure: '', description: ''})
const [events, setEvents] = useState([])
const handleChange = (e) => {
    setEvent({...event, [e.target.name]: e.target.value})
}
const addEvent =(e) => {
    e.preventDefault()
    setEvents([...events, event])
    setEvent({title: '', dateHeure: '', description: ''})
}

  return (
    <div>
        <h1>Events</h1>
        <form>
            <div className="form-group">
                <label htmlFor="title">Titre</label>
                <input type="text" className="form-control" id="title" name="title" value={event.title} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="dateHeure">Date et heure</label>
                <input type="datetime-local" className="form-control" id="dateHeure" name="dateHeure" value={event.dateHeure} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" name="description" value={event.description} onChange={handleChange}></textarea>
            </div>
            <button type="submit" onClick={addEvent} className="btn btn-primary">Ajouter</button>
        </form>
        {/* affichage des events */}
        <h2>Liste des événements</h2>
        <table  className="table table-responsive table-boredered">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Date et heure</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {events.map((e, i) => (
                    <tr key={i}>
                        <td>{e.title}</td>
                        <td>{e.dateHeure}</td>
                        <td>{e.description}</td>
                    </tr>
                ))}
            </tbody>

        </table>
        </div>
  )
}

export default Events