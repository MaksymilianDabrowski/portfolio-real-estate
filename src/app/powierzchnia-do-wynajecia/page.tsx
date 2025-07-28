import BreakSection from "../components/BreakSection"
import ForRent from "../components/ForRent"
import Motion from "../components/Motion"

export default function Powieszchnia() {
    return (
        <>
            <Motion>
                <BreakSection
                    pretitle=""
                    title="Powieszchnia do wynajęcia">
                    Zapraszamy do zapoznania się z naszą ofertą wynajmu powierzchni biznesowych, która spełni wszelkie potrzeby Twojej firmy.
                </BreakSection>
                <ForRent imgPos={"left"} />
            </Motion>
        </>
    )
}