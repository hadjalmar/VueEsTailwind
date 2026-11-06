<script setup>
import { createProduct, getProducts,deleteprod } from '../api/Products';

</script>

<script>
    export default{
        name: "ProductManager",
        data(){
            return{
                products:[],
                newProduct:{
                    name:"",

                }
            }
        },
        methods:{
            async loadProducts(){
                this.products = await getProducts();
            },
            async addProduct(product){
                await createProduct(product);
                await this.loadProducts();
            },
            async removeProduct(id){
                await deleteprod()
            }
        },
        mounted(){
            this.loadProducts()
        }
    };
</script>

<template>
    <main class="flex justify-center item-center flex-col">
        <h1 class="">Termék Management</h1>
        <table class="flex w-full">
            <thead class="p-2 w-300">
            <tr class="flex justify-around gap-8">
                <th class="">id</th>
                <th class="">name</th>
                <th class="">price</th>
                <th class="">inStock</th>
            </tr>
            </thead>
            <tbody class="w-full">
                <tr v-for="product in products" class="flex justify-around gap-8">
                    <td class="">{{ product.id }}</td>
                    <td class="">{{ product.name }}</td>
                    <td class="">{{ product.price }}</td>
                    <td class="">{{ product.inStock ? "igen":"elfogyott" }}</td>
                </tr>
            </tbody>
        </table>
        <form class="">
            <label for="name">Név:</label>
            <input type="text" name="name"><br>
            <label for="price">Ár:</label>
            <input type="number" name="price"><br>
            <label for="instock">van-e:</label>
            <input type="checkbox" name="instock"><br>
            <button type="submit"></button>
        </form>
        <form class="">
            <label for="name">Név:</label>
            <input type="text" name="name"><br>
            <label for="price">Ár:</label>
            <input type="number" name="price"><br>
            <label for="instock">van-e:</label>
            <input type="checkbox" name="instock"><br>
            <button type="submit"></button>
        </form>
    </main>
</template>