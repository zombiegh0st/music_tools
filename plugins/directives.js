import Vue from 'vue';

Vue.directive('hidden', function (el, binding) {
	el.style.visibility = !!binding.value ? 'hidden' : 'visible';
});
