import styles from './EventList.module.css'

export default function EventList({ events, handleClick }) {
    return (
      <div className={styles.card_list}>
        {events.map((event, index) => (
          <div className={styles.card} key={event.id}>
            <h2>{index} - {event.title}</h2>
            <button onClick={() => handleClick(event.id)}>Delete event</button>
          </div>
        ))}
      </div>
    )

}
