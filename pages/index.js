import styles from '../styles/Home.module.css';
import { useState } from 'react';
import ItemAddedNotif from '../components/itemAddedNotif';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin2Line } from 'react-icons/ri';

export default function Home() {
  const [grocery, setGrocery] = useState('');

  const [lists, setLists] = useState([]);

  const [itemAdded, setItemAdded] = useState(false);

  const [listEpmty, setListEmpty] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (grocery) {
      setLists([...lists, grocery]);

      setGrocery('');

      setItemAdded(true);

      setTimeout(() => {
        setItemAdded(false);
      }, 1000);

      setListEmpty(false);
    }
  };

  const getGrocery = (event) => {
    setGrocery(event.target.value);
  };

  const emptyList = () => {
    setLists([]);

    setListEmpty(true);
  };

  /*   const delItem = () => {
    let newList = lists.map((list, index) => {
      list.index !== index;
    });
    return setLists([newList]);
  }; */

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        {itemAdded ? <ItemAddedNotif /> : ''}
        <h2>grocery bud</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            name="grocery"
            placeholder="e.g milk"
            value={grocery}
            onChange={getGrocery}
          />
          <button>Submit</button>
        </form>

        <section className={styles.listContainer}>
          {lists.map((list, index) => {
            return (
              <div key={index} className={styles.list}>
                <p className={styles.listItem}>{list}</p>
                <div>
                  <button className={styles.editBtn}>
                    <FiEdit />
                  </button>
                  <button className={styles.delBtn} /* onClick={delItem} */>
                    <RiDeleteBin2Line />
                  </button>
                </div>
              </div>
            );
          })}
          {!listEpmty ? (
            <button className={styles.clearBtn} onClick={emptyList}>
              empty list
            </button>
          ) : (
            ''
          )}
        </section>
      </article>
    </main>
  );
}
