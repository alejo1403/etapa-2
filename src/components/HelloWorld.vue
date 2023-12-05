<template>
  <div>
    <h1>{{ message }}</h1>
    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Valor1</th>
          <th>Valor2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedItems" :key="item.id" class="data-item">
          <td>{{ item.ID }}</td>
          <td>{{ item.Nombre }}</td>
          <td>{{ item.Valor1 }}</td>
          <td>{{ item.Valor2 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

export default {
  data() {
    return {
      message: 'Datos de la Tabla:',
      items: [],
    };
  },

  computed: {
    sortedItems() {
      // Filtra y ordena los items por el campo "ID"
      const itemsWithID = this.items.filter(item => !isNaN(item.ID));
      return itemsWithID.slice().sort((a, b) => a.ID - b.ID);
    },
  },

  async mounted() {
    const datosCollection = collection(db, 'Datos de la tabla');

    try {
      const querySnapshot = await getDocs(datosCollection);
      querySnapshot.forEach((doc) => {
        const data = {
          ID: doc.data().ID,
          Nombre: doc.data().Nombre,
          Valor1: doc.data().Valor1,
          Valor2: doc.data().Valor2,
};
        console.log('Documento cargado:', data);
        this.items.push(data);
      });
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  },
};
</script>

<style scoped>
/* Estilos para la tabla */
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border: 1px solid #000;
}

/* Estilos para las celdas específicas */
.styled-table th {
  background-color: #808080; /* Gris */
  color: #fff; /* Letra blanca */
}

.styled-table td {
  color: #000; /* Letra negra */
}
</style>
