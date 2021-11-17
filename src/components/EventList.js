import styles from './EventList.module.css'

export default function EventList({eventer,handleClick}) {
    return (
        <div className={styles.card_list}>
            {eventer.map((todo,index) => (
                <div className={styles.card} key={todo.id}>
                    <h3>{index} - {todo.title}</h3>
                    <button onClick={() => handleClick(todo.id)}>Delete Event</button>
                </div>
            ))}
        </div>
    )
}
