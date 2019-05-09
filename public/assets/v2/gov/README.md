This version/theme renders header/footer similar to https://gov.bc.ca as of October 2018.

See [demo](https://mygovbc-core-headerfooterservice-gcpe-mygovbc-demo.pathfinder.gov.bc.ca/v2/gov/test.html)

## Usage
Add following HTML code fragment to your web site, replacing `<bcgov-header-footer-service-host>` and `<options>`

```
<script type="text/javascript" src="https://<bcgov-header-footer-service-host>/v2/gov/"></script>
<script type="text/javascript">
    unippear(<options>);
</script>
```
supported `<options>` object

* headerContainer - css selector for header container
* footerContainer - css selector for footer container
* showSearch - boolean **true**|false, whether to show search button
* showMenu - boolean **true**|false, whether to show top nav hamburger menu
* showFooterExpand - boolean **true**|false, whether to show footer expand
* showBackToTop - boolean **true**|false, whether to show back to top button when scrolling down to near bottom

Example `<options>`

```
{
  headerContainer: '#wrapper',
  footerContainer: '#wrapper',
  showSearch: false,
  showMenu: false,
  showFooterExpand: false,
  showBackToTop: false,
}
```