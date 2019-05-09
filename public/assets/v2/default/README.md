This version/theme renders header/footer similar to https://bcgov.github.io/bootstrap-theme/.

See [demo](https://mygovbc-core-headerfooterservice-gcpe-mygovbc-demo.pathfinder.gov.bc.ca/v2/default/test.html)

## Usage
Add following HTML code fragment to your web site, replacing `<bcgov-header-footer-service-host>` and `<options>`

```
<script type="text/javascript" src="https://<bcgov-header-footer-service-host>/v2/default/"></script>
<script type="text/javascript">
    unippear(<options>);
</script>
```
supported `<options>` object

* headerContainer - css selector for header container
* footerContainer - css selector for footer container
* brand - text shown next to the logo
* menuItems - an array of header menu items, each being an object with properties *url* and *text* at minimum

Example `<options>`

```
{
  headerContainer: '#wrapper',
  footerContainer: '#wrapper',
  brand: 'Bootstrap Theme',
  menuItems: [{
    url: "https://bcgov.github.io/bootstrap-theme/",
    text: "Home"
  }, {
    url: "https://bcgov.github.io/bootstrap-theme/docs/getting-started/introduction",
    text: "Getting Started"
  }, {
    url: "https://bcgov.github.io/bootstrap-theme/docs/reference/simple",
    text: "Theme Demo"
  }]
}
```