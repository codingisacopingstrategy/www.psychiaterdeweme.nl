require 'rubygems'
require 'nokogiri'
require 'json'

f = File.open("Diagram1.xml")
@doc = Nokogiri::XML(f)
f.close

test = @doc.xpath('//dia:attribute[@name="conn_endpoints"]', 'xlmns:dia' => "http://www.lysator.liu.se/~alla/dia/")

connections = Hash.new

test.each do|attribute|
  points = attribute.xpath('dia:point/@val')
  from = points[0].content.sub(",","_")
  to = points[1].content.sub(",","_")
  if connections.has_key?(from)
    connections[from].push(to)
  else
    connections[from] = [to]
  end
end

puts JSON.pretty_generate connections

