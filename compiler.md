<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="DBasic_0"></a>DBasic</h1> <p class="has-line-data" data-line-start="2" data-line-end="6">Welcome to my biggest project so far, the DBasic programming language !<br> DBasic is a BASIC-like, multi-purpose, powerful amateur programming language,<br> that empowers programmers to quickly bring their ideas to life.<br> This compiler targets x86, 32 or 64bit Windows machines.</p> <h2 class="code-line" data-line-start=7 data-line-end=8 ><a id="Features_7"></a>Features</h2> <ul> <li class="has-line-data" data-line-start="8" data-line-end="9">Ease of use: DBasic is a high-level language that allows programmers to code efficiently without getting bogged-down in machine-specific complications</li> <li class="has-line-data" data-line-start="9" data-line-end="10">Object-oriented: Classes allow for clean, reusable, concise code</li> <li class="has-line-data" data-line-start="10" data-line-end="11">User-friendly: With a BASIC-like, case insensitive syntax, DBasic is very intuitive and easy to read and write</li> <li class="has-line-data" data-line-start="11" data-line-end="12">Customizable librairies: DBasic libs are plain-text assembly, making them easy to modify and extend, empowering programmers to create their perfect environment</li> <li class="has-line-data" data-line-start="12" data-line-end="13">Permissive syntax: DBasic syntax is designed to accomodate everyone, and thus includes a lot of optional syntax bits</li> <li class="has-line-data" data-line-start="13" data-line-end="14">Swift compilation across all windows versions: The compiler is easy to install and engineered for speed, produces tight code, and is written in VBScript to allow it to run even on the oldest windows versions</li> <li class="has-line-data" data-line-start="14" data-line-end="15">Easy access to unimplemented features: DBasic implements inline assembly to allow programmers to directly write in machine code with FAsm syntax to unlock the full power of their machine within DBasic</li> <li class="has-line-data" data-line-start="15" data-line-end="17">Hand-optimizable: DBasic shows the compiled assembly as plain text in output.asm, allowing the programmer to modify it directly, and reassemble it. Inline assembly can also be used to optimize bottlenecks and critical functions</li> </ul> <h2 class="code-line" data-line-start=17 data-line-end=18 ><a id="Getting_started_17"></a>Getting started</h2> <p class="has-line-data" data-line-start="18" data-line-end="19">To get started with DBasic, follow these simple steps:</p> <ol> <li class="has-line-data" data-line-start="19" data-line-end="20">Download this repository</li> <li class="has-line-data" data-line-start="20" data-line-end="21">Explore the documentation and example files</li> <li class="has-line-data" data-line-start="21" data-line-end="22">Compile your code simply by specifiying the librairies to use in LIBS.INI, and running the compiler via the command line</li> <li class="has-line-data" data-line-start="22" data-line-end="24">You can now find your executable in the same folder as the source !</li> </ol> <h2 class="code-line" data-line-start=24 data-line-end=25 ><a id="Example_24"></a>Example</h2> <p class="has-line-data" data-line-start="25" data-line-end="26">Here’s a Hello world in DBasic:</p>

<pre style="border-radius: 5px;padding: 10px;border: 1px solid #ddd;background-color: #f4f4f4;border-radius: 5px;font-family: monospace;"><code class="has-line-data" data-line-start="27" data-line-end="31">
Main
	MsgBox(&quot;Hello, world!&quot;,&quot;Hello from DBasic&quot;,msgbox_information)
EndMain
</code></pre>
<p class="has-line-data" data-line-start="31" data-line-end="32">And here’s how to open a basic window:</p>
<pre style="border-radius: 5px;padding: 10px;border: 1px solid #ddd;background-color: #f4f4f4;border-radius: 5px;font-family: monospace;"><code class="has-line-data" data-line-start="33" data-line-end="50">
Main
	Dim WindowID
	Dim PanelID
	
	WindowID = OpenWindow(100,100,600,300,&quot;Template program&quot;,@WindowCallback)
	
	Repeat Until HandleWindowEvents() = 0
EndMain

Sub WindowCallback(lparam,wparam,wmsg,hwnd) (stdcall)
	Select wmsg
		Case #WM_DESTROY
			PostQuitMessage(0)
		Case Else
			return(DefaultMessageHandling(lparam,wparam,wmsg,hwnd))
	EndSelect
EndSub
</code></pre>
<p class="has-line-data" data-line-start="51" data-line-end="52">Happy coding, and thank you for choosing DBasic :)</p>
