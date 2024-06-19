<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xsl:stylesheet [
    <!ENTITY example "This is an entity example">
]>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/">
        <html>
            <body>
                <h1>&example;</h1>
                <p>This is a paragraph using an entity: &example;</p>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
