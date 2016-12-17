<!-- AdBlock detection that sends an event to Google Analytics -->

  <script type="text/javascript">
  jQuery(window).on('load', function() { 

      if (jQuery('.ohDear').height() == 0) {

      ga('send', 'event', 'Ads', 'Inactive', 'AdBlocker Active');
      console.log('AdBlocker Active');		

      } else {
        ga('send', 'event', 'Ads', 'Active', 'AdBlocker Inactive');
        console.log('AdBlocker Inactive');
      }
  });
</script>
