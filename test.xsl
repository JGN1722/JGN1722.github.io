<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:php="http://php.net/xsl"
                version="1.0">
  <xsl:template match="/">
    <!-- Store the array result in a variable -->
    <xsl:variable name="files" select="php:function('scandir', '.')" />
    
    <root>
      <!-- Iterate over each element in the array -->
      <xsl:for-each select="$files/*">
        <file>
          <!-- Output the current file name -->
          <xsl:value-of select="." />
        </file>
      </xsl:for-each>
    </root>
  </xsl:template>
</xsl:stylesheet>
