var azureMobileApps = require('azure-mobile-apps');
var table = azureMobileApps.table();

table.columns = {
	"title": "string",
	"start_date": "date",
	"end_date": "date",
	"description": "string",
	"image_url": "string",
	"cost": "string",
	"event_type": "string",
	"send_notification": "boolean"
};
 
table.dynamicSchema = false;

module.exports = table;
