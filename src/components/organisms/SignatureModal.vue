<script setup>
import AppModal from '../AppModal.vue';

</script>

<template>
    <div>
        <app-modal v-if="uploadOptions">
            <template v-slot:modal-content>

            </template>
        </app-modal>
    </div>
</template>
