import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: [
                {
                    id: 1,
                    name: 'Posee',
                    price: 200,
                    image: 'https://down-th.img.susercontent.com/file/22d6b9cd67a2b5d01c91e882a9c9624b'
                },
                {
                    id: 2,
                    name: 'Nike Alphafly 2',
                    price: 2100,
                    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/097a2db2-be36-41df-b5e6-3469f94d3617/รองเท้าวิ่งโร้ดเรซซิ่งผู้-alphafly-2-cVPHCD.png'
                },
                {
                    id: 3,
                    name: 'Nike Structure 25',
                    price: 4200,
                    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/572580b1-9635-417c-91c1-22d70aa1c839/รองเท้าวิ่งโร้ดรันนิ่งผู้-structure-25-หน้า-tFBSvw.png'
                },
                {
                    id: 4,
                    name: 'Nike Structure 25',
                    price: 3800,
                    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4c8884b4-0c67-4635-b179-5a9bac726a91/รองเท้าวิ่งโร้ดรันนิ่งผู้-structure-25-ldJChc.png'
                },
                {
                    id: 5,
                    name: 'Nike Pegasus 40',
                    price: 7200,
                    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/514f96f2-1635-4792-a87a-f7da21906135/รองเท้าวิ่งโร้ดรันนิ่งผู้-pegasus-40-4TS8dd.png'
                },
                {
                    id: 6,
                    name: 'Nike Rival Fly 3',
                    price: 8000,
                    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/22ef7e56-5c8d-4c14-bbbb-bf859c6b410e/รองเท้าวิ่งโร้ดเรซซิ่งผู้-rival-fly-3-XbhTCL.png'
                },
                {
                    id: 7,
                    name: 'Nike Streakfly',
                    price: 1399,
                    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/451b4531-1090-4044-ad0f-fa9e2b6cd902/รองเท้าวิ่งโร้ดเรซซิ่ง-streakfly-V17qZm.png'
                },
                {
                    id: 8,
                    name: 'Nike Revolution 6',
                    price: 5999,
                    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7df57edf-bdc6-4320-a956-8ce37228cd1d/รองเท้าวิ่งโร้ดรันนิ่งผู้-revolution-6-NC0P7k.png'
                },
                {
                    id: 9,
                    name: 'Nike Juniper Trail 2 Next Nature',
                    price: 4500,
                    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2bc84f5a-6be7-442c-943e-abc0226a3af2/รองเท้าวิ่งเทรลผู้-juniper-trail-2-next-nature-7r8pf0.png'
                },
                {
                    id: 10,
                    name: 'Nike Ultrafly',
                    price: 350,
                    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a400930d-168a-4117-bec9-fba073e0b330/รองเท้าวิ่งเทรลผู้-ultrafly-8VZ6qW.png'
                }
            
            ],
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
              this.products[index].quantity += 1;
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
              });
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been saved',
                showConfirmButton: false,
                timer: 1500
              });
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been updated',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been updated',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your item has been removed',
              showConfirmButton: false,
              timer: 1500
            });
        }
        
    },
})