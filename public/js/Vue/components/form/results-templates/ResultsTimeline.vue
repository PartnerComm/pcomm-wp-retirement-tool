<template>
    <div class="results-timeline">
        <results-timeline-content />
        <results-timeline-tabs
              :tabs="tabs"

        />
        <results-resources />
    </div>
</template>

<script>
const tabs = [{
  id: '1',
  title: '24 months',
  label: 'before retirement',
}, {
  id: '2',
  title: '12 months',
  label: 'before retirement',
}, {
  id: '3',
  title: '4 months',
  label: 'before retirement',
}, {
   id: '4',
   title: '2 months',
   label: 'before retirement',
}, {
    id: '5',
    title: 'Last day',
    label: 'before retirement',
}, {
     id: '6',
     title: 'During<br />retirement',
}];
import ResultsTimelineContent from './ResultsTimelineContent';
import ResultsTimelineTabs from './ResultsTimelineTabs';
import ResultsResources from './ResultsResources';
export default {
  props: {},
  data() {
    return {
        tabs: tabs,
    }
  },
  components: {
    ResultsTimelineContent,
    ResultsTimelineTabs,
    ResultsResources
  },
  methods: {

  },
  computed: {

  },
  created() {

  },
  mounted() {

  }

  }

</script>

<style>

</style>