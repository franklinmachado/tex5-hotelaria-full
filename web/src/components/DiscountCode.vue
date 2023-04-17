<template>
    <div>
        <form>
            <label>
                <br />
                Código de desconto: DESCON10
                <br />
                <input type="text" placeholder="Insira seu cupom" v-model="discountCode" class="discount" />
            </label>
            <button @click.prevent="applyDiscount">Aplicar</button>
        </form>
        <p v-if="discountApplied">Desconto aplicado: R$ {{ discountAmount.toFixed(2).replace('.', ',') }}</p>
    </div>
</template>
  
<script>

export default {
    name: 'DiscountCode',
    data() {
        return {
            discountCode: ''
        }
    },
    computed: {
        discountAmount() {
            return this.discountCode === 'DESCON10' ? this.$store.getters.agendarDiaria.totalResAd * 0.1 : 0
        },
        discountApplied() {
            return this.discountAmount > 0
        }
    },
    methods: {
        applyDiscount() {
            if (this.discountCode === '') {
                alert('Digite um código de desconto antes de continuar.')
                return
            }
            let usedDiscountCodes = JSON.parse(localStorage.getItem('usedDiscountCodes')) || []
            if (usedDiscountCodes.includes(this.discountCode)) {
                alert('Este código já foi usado.')
                return
            }
            if (this.discountAmount === 0) {
                alert('Código de desconto inválido.')
                this.discountCode = ''
                return
            }
            usedDiscountCodes.push(this.discountCode)
            localStorage.setItem('usedDiscountCodes', JSON.stringify(usedDiscountCodes))
            this.discountCode = '';
        },
    },
}

</script>

<style scoped>
    input[type='text'] {
        padding: 10px 20px;
        margin: 20px 5px;
        border: none;
        outline: none;
    }

    button {
        margin: 0 .5rem;
        padding: .6rem .8rem;
        color: #ddd;
        background: #415a77;
        border: none;
        cursor: pointer;
    }
</style>