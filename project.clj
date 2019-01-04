(defproject create-incident "0.1.0-SNAPSHOT"
  :plugins [[lein-cljsbuild "1.1.7"]]
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.439"]]
  :repl-options {:init-ns create-incident.core}
  :cljsbuild {:builds [{
                        :source-paths ["src"]
                        :compiler {:main create-incident.core
                                   :optimizations :whitespace
                                   :output-to "./Code.js"
                                   :output-dir "target"
                                   :pretty-print true
                                   :externs ["resources/gas.ext.js"]
                                   :foreign-libs [{:file "src/entrypoints.js"
                                                   :provides ["create-incident.entrypoints"]}]}}]})

; https://lambdaisland.com/blog/2016-10-01-clojurescript-and-google-apps-script
