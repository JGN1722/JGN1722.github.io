<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  <xsl:template match="/">
    <!-- Store the content of the file in a variable -->
    <xsl:variable name="fileContent" select="php:function('file_get_contents', 'path/to/your/file.txt')" />
    
    <!-- Output the content of the file -->
    <fileContent>
      <xsl:value-of select="$fileContent" />
    </fileContent>
  </xsl:template>
</xsl:stylesheet>
